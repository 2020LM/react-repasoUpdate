import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store.js";

import {
	selectCurrentSong,
	updateSong as updateSongAction,
	setCurrentSong as setCurrentSongAction,
	BackgroundSong,
} from "../../../../store/slices/Sounds/SoundsSlice.js";
import { formatDuration } from "../../../../lib/generalFunctions.js";
import play from "../../../../assets/img/icons/icons8-play-50.webp";
import pause from "../../../../assets/img/icons/icons8-pausa-50.webp";
import repeatSound from "../../../../assets/img/icons/icons8-repeat-50_5_11zon_115_11zon.webp";
import notRepeatSound from "../../../../assets/img/icons/icons8-repeat-one-50.webp";

import classes from "./backgroundSounds.module.css";

export const BackgroundSound = ({ index }: { index: number }) => {
	const dispatch = useDispatch();
	const item = useSelector((state: RootState) => state.sounds.songs[index]);
	const currentSongId = useSelector((state: RootState) => selectCurrentSong(state).id);

	if (!item) {
		return null;
	}

	const isRepeating = item.repeat === "true" || item.repeat === true;
	const isPlaying =
		currentSongId === item.id && item.currentTime < item.duration;

	const updateSong = (attribute: keyof BackgroundSong, value: any) => {
		dispatch(updateSongAction({ index, attribute, value }));
	};

	const handlePlayPause = () => {
		if (currentSongId === item.id) {
			dispatch(setCurrentSongAction({}));
			return;
		}

		const hasFinished = item.currentTime >= item.duration;
		if (hasFinished) {
			updateSong("currentTime", 0);
		}

		dispatch(
			setCurrentSongAction({
				...item,
				currentTime: hasFinished ? 0 : item.currentTime,
			})
		);
	};

	return (
		<div className={classes.audioOptions}>
			<div className={`bg-transparent m-0 p-0 ${classes.pausePlay}`}>
				<button
					type="button"
					className={classes.audioControlButton}
					aria-label={isPlaying ? "Pause" : "Play"}
					onClick={handlePlayPause}
				>
					<img
						className={classes.soundsImg}
						src={isPlaying ? pause : play}
						alt=""
					/>
				</button>
			</div>

			<div className={classes.inputDiv}>
				<input
					type="range"
					min="0"
					max={item.duration}
					value={item.currentTime}
					onChange={(event) =>
						updateSong("currentTime", Number(event.target.value))
					}
					aria-label={`${item.type} progress`}
				/>
			</div>

			<div className={classes.aditionalOptions}>
				<button
					type="button"
					className={classes.audioControlButton}
					aria-label={isRepeating ? "Disable loop" : "Enable loop"}
					onClick={() => updateSong("repeat", !isRepeating)}
				>
					<img
						className={classes.soundsImg}
						src={isRepeating ? repeatSound : notRepeatSound}
						alt=""
					/>
				</button>

				<div className={classes.trackDuration}>
					<div>
						<p>{formatDuration(Math.max(0, item.duration - item.currentTime))}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackgroundSound;
