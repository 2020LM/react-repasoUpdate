// Third-Party & Ecosystem Imports
import React from "react";

// Internal Tools & Utilities
import { formatDuration } from "../../../../../lib/generalFunctions.ts";
import play from "../../../../../assets/img/icons/icons8-play-50.webp";
import pause from "../../../../../assets/img/icons/icons8-pausa-50.webp";
import repeatSound from "../../../../../assets/img/icons/icons8-repeat-50_5_11zon_115_11zon.webp";
import notRepeatSound from "../../../../../assets/img/icons/icons8-repeat-one-50.webp";

// Local Components
import { useBackgroundSoundHooks } from "../hooks/useBackgroundSoundHooks.ts";

// Component Styles
import classes from "./backgroundSounds.module.css";

export const BackgroundSound = ({ index }: { index: number }) => {
	const { item, isRepeating, isPlaying, updateSong, handlePlayPause } =
		useBackgroundSoundHooks(index);

	if (!item) {
		return null;
	}

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
						updateSong({
							attribute: "currentTime",
							value: Number(event.target.value),
						})
					}
					aria-label={`${item.type} progress`}
				/>
			</div>

			<div className={classes.aditionalOptions}>
				<button
					type="button"
					className={classes.audioControlButton}
					aria-label={isRepeating ? "Disable loop" : "Enable loop"}
					onClick={() =>
						updateSong({ attribute: "repeat", value: !isRepeating })
					}
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
