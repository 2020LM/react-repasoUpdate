// Third-Party & Ecosystem Imports
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
	selectCurrentSong,
	selectMutedMusic,
	selectSongs,
	selectVolumeMusic,
	setCurrentSong,
	updateSong,
} from "../../../../store/slices/Sounds/SoundsSlice.js";

// Local Components
import { useBackgroundAudio } from "./useBackgroundAudio.ts";

export const useBackgroundSoundManager = () => {
	const currentSong = useSelector(selectCurrentSong);
	const songs = useSelector(selectSongs);
	const volumeMusic = useSelector(selectVolumeMusic);
	const mutedMusic = useSelector(selectMutedMusic);
	const dispatch = useDispatch();

	// Updates the active song's playback time or duration in Redux.
	const updateCurrentSong = useCallback(
		(attribute: "currentTime" | "duration", value: number) => {
			const index = songs.findIndex((song) => song.id === currentSong.id);

			if (index < 0) return;
			dispatch(updateSong({ index, attribute, value }));
		},
		[currentSong.id, dispatch, songs],
	);

	// Clears the active song from Redux when playback ends.
	const stopCurrentSong = useCallback(() => {
		dispatch(setCurrentSong({}));
	}, [dispatch]);

	// Connects the current Redux song and playback callbacks to the audio hook.
	useBackgroundAudio({
		currentSong,
		volume: volumeMusic,
		muted: mutedMusic,
		onUpdateSong: updateCurrentSong,
		onEnded: stopCurrentSong,
	});
};
