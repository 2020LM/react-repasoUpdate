// Third-Party & Ecosystem Imports
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
	selectVolumeMusic,
	selectMutedMusic,
	setVolumeMusic,
	setMutedMusic,
} from "../../../../../store/slices/Sounds/SoundsSlice.js";

// Internal Tools & Utilities
import volumeIcon from "../../../../../assets/img/icons/volumen_13_11zon_128_11zon.webp";
import muted from "../../../../../assets/img/icons/mute.webp";
import storage from "../../../../../lib/storage.js";

// Component Styles
import classes from "../view/backgroundSounds.module.css";

export const BackgroundSoundConfiguration = () => {
	const volume = useSelector(selectVolumeMusic);
	const mutedMusic = useSelector(selectMutedMusic);
	const dispatch = useDispatch();
	const volumeBar = useRef<HTMLInputElement | null>(null);

	const updateMutedMusic = (value: boolean) => {
		storage.set("mutedMusic", value);
		dispatch(setMutedMusic(value));
	};
	const updateVolume = (value: number) => {
		storage.set("backgroundSoundVolume", value);
		dispatch(setVolumeMusic(value));
	};

	return (
		<div className={classes.volumenStyle}>
			{mutedMusic ? (
				<button
					type="button"
					className={classes.audioControlButton}
					aria-label="Unmute music"
					onClick={() => updateMutedMusic(false)}
				>
					<img
						className={classes.volumenIcon}
						src={muted}
						alt=""
					/>
				</button>
			) : (
				<button
					type="button"
					className={classes.audioControlButton}
					aria-label="Mute music"
					onClick={() => updateMutedMusic(true)}
				>
					<img
						className={classes.volumenIcon}
						src={volumeIcon}
						alt=""
					/>
				</button>
			)}
			<input
				ref={volumeBar}
				type="range"
				min="0"
				max="100"
				value={volume}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateVolume(Number(event.target.value))}
			/>
			<span>{volume}</span>
		</div>
	);
};
