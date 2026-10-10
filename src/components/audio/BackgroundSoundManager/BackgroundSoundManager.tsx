import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	selectCurrentSong,
	selectMutedMusic,
	selectSongs,
	selectVolumeMusic,
	setCurrentSong as setCurrentSongAction,
	updateSong as updateSongAction,
} from "../../../store/slices/Sounds/SoundsSlice.js";

export const BackgroundSoundManager = () => {
		const currentSong = useSelector(selectCurrentSong);
		const songs = useSelector(selectSongs);
		const volumeMusic = useSelector(selectVolumeMusic);
		const mutedMusic = useSelector(selectMutedMusic);
		const audioRef = useRef<HTMLAudioElement | null>(null);
		const updatingProgressRef = useRef(false);
		const dispatch = useDispatch();

        const setCurrentSong = (value: { [key: string]: any }) => dispatch(setCurrentSongAction(value));
        const updateSong = (value: { [key: string]: any }) => dispatch(updateSongAction(value));

		const updateCurrentSong = (attribute: string, value: any) => {
			const index = songs.findIndex((song: { id: string }) => song.id === currentSong.id);

			if (index >= 0) {
				updateSong({ index, attribute, value });
			}
		};

		useEffect(() => {
			if (!currentSong.song) return undefined;

			const audio = new Audio(currentSong.song);
			audio.loop = currentSong.repeat === "true" || currentSong.repeat === true;
			audio.volume = Number(volumeMusic) / 100;
			audio.muted = mutedMusic;
			audioRef.current = audio;

			const handleTimeUpdate = () => {
				updatingProgressRef.current = true;
				updateCurrentSong("currentTime", audio.currentTime);
			};

			const handleLoadedMetadata = () => {
				updateCurrentSong("duration", audio.duration);
			};

			const handleEnded = () => {
				setCurrentSong({});
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

		useEffect(() => {
			if (!audioRef.current) return;

			audioRef.current.volume = Number(volumeMusic) / 100;
			audioRef.current.muted = mutedMusic;
			audioRef.current.loop =
				currentSong.repeat === "true" || currentSong.repeat === true;
		}, [currentSong.repeat, mutedMusic, volumeMusic]);

		useEffect(() => {
			if (!audioRef.current) return;

			if (updatingProgressRef.current) {
				updatingProgressRef.current = false;
				return;
			}

			audioRef.current.currentTime = currentSong.currentTime || 0;
		}, [currentSong.currentTime]);

		return null;
	};
