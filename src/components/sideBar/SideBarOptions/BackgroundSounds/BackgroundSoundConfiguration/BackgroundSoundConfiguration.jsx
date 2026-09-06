import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import volumeIcon from "../../../../../assets/img/icons/volumen_13_11zon_128_11zon.webp";
import muted from "../../../../../assets/img/icons/mute.webp";
import {
	selectVolumeMusic,
	selectMutedMusic,
	setVolumeMusic,
	setMutedMusic,
} from "../../../../../store/slices/Sounds/SoundsSlice.js";

import classes from "../backgroundSounds.module.css";

const BackgroundSoundConfiguration = () => {
	const volume = useSelector(selectVolumeMusic);
	const mutedMusic = useSelector(selectMutedMusic);
	const dispatch = useDispatch();
	const volumeBar = useRef(null);

	const updateMute = (value) => dispatch(setMutedMusic(value));
	const updateVolume = (value) => dispatch(setVolumeMusic(value));

	return (
		<div className={classes.volumenStyle}>
			{mutedMusic ? (
				<span>
					<img
						className={classes.volumenIcon}
						src={muted}
						onClick={() => updateMute(false)}
					/>
				</span>
			) : (
				<span>
					<img
						className={classes.volumenIcon}
						src={volumeIcon}
						onClick={() => updateMute(true)}
					/>
				</span>
			)}
			<input
				ref={volumeBar}
				type="range"
				min="0"
				max="100"
				value={volume}
				onChange={() => updateVolume(volumeBar.current.value)}
			/>
			<span>{volume}</span>
		</div>
	);
};

export default BackgroundSoundConfiguration;
