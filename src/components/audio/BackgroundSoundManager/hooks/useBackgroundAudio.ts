// Third-Party & Ecosystem Imports
import { useEffect, useRef } from "react";

// Architecture & Global State Imports
import { BackgroundSong } from "../../../../store/slices/Sounds/SoundsSlice.ts";

export const useBackgroundAudio = ({
  currentSong,
  volume,
  muted,
  onUpdateSong,
  onEnded,
}: {
  currentSong: Partial<BackgroundSong>;
  volume: number;
  muted: boolean;
  onUpdateSong: (attribute: "currentTime" | "duration", value: number) => void;
  onEnded: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const updatingProgressRef = useRef(false);
  const settingsRef = useRef({ volume, muted, repeat: currentSong.repeat });
  const callbacksRef = useRef({ onUpdateSong, onEnded });

  settingsRef.current = { volume, muted, repeat: currentSong.repeat };
  callbacksRef.current = { onUpdateSong, onEnded };

  // Creates and starts the selected audio track, then removes its listeners and releases it on cleanup.
  useEffect(() => {
    if (!currentSong.song) return undefined;

    const audio = new Audio(currentSong.song);
    audio.loop =
      settingsRef.current.repeat === "true" ||
      settingsRef.current.repeat === true;
    audio.volume = settingsRef.current.volume / 100;
    audio.muted = settingsRef.current.muted;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      updatingProgressRef.current = true;
      callbacksRef.current.onUpdateSong("currentTime", audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      callbacksRef.current.onUpdateSong("duration", audio.duration);
    };

    const handleEnded = () => {
      callbacksRef.current.onEnded();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.play().catch((error) => {
      console.error("Error playing background audio:", error);
    });

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.currentTime = 0;
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
    };
  }, [currentSong.id, currentSong.song]);

  // Applies volume, mute, and repeat settings to the active audio track.
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
    audioRef.current.muted = muted;
    audioRef.current.loop =
      currentSong.repeat === "true" || currentSong.repeat === true;
  }, [currentSong.id, currentSong.repeat, currentSong.song, volume, muted]);

  // Keeps the audio playback position synchronized with the selected song state.
  useEffect(() => {
    if (!audioRef.current) return;

    if (updatingProgressRef.current) {
      updatingProgressRef.current = false;
      return;
    }

    audioRef.current.currentTime = currentSong.currentTime ?? 0;
  }, [currentSong.currentTime, currentSong.id, currentSong.song]);
};