// Third-Party & Ecosystem Imports
import { useEffect, useRef } from "react";
import type { UseAlarmAudioOptions } from "../data/ObjectDescription.ts";

// This hook manages the playback of alarm audio based on the alarm state and timer.
export const useAlarmAudio = ({
  alarmId,
  sound,
  volume,
  muted,
  totalSeconds,
  seconds,
  minutes,
}: UseAlarmAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousAlarmIdRef = useRef(alarmId);

  // Creates the alarm audio instance and releases it when the sound changes or the hook unmounts.
  useEffect(() => {
    const audio = new Audio(sound);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
    };
  }, [sound]);

  // Applies the current volume and mute state to the alarm audio.
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
    audioRef.current.muted = muted;
  }, [volume, muted]);

  // Plays the alarm when the timer finishes or the selected alarm changes.
  useEffect(() => {
    const alarmChanged = previousAlarmIdRef.current !== alarmId;
    const timerFinished =
      !muted && totalSeconds === 0 && minutes === 0 && seconds === 0;

    if (!muted && (timerFinished || alarmChanged)) {
      audioRef.current?.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    previousAlarmIdRef.current = alarmId;
  }, [alarmId, totalSeconds, minutes, seconds, muted]);
};