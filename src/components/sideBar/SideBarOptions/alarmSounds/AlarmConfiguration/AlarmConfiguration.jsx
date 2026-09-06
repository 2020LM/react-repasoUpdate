import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import volumeIcon from "../../../../../assets/img/icons/volumen_13_11zon_128_11zon.webp";
import muted from "../../../../../assets/img/icons/mute.webp";
import cheque from "../../../../../assets/img/icons/cheque.webp";
import {
  selectAlarmVolume,
  selectMutedAlarm,
  setAlarmVolume,
  setMutedAlarm,
} from "../../../../../store/slices/Alarm/AlarmSlice.js";
import storage from "../../../../../lib/storage";
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.js";
import { translator } from "../../../../translator/translator";

import classes from "../alarmSounds.module.css";

const AlarmConfiguration = () => {
  const alarmVolume = useSelector(selectAlarmVolume);
  const mutedAlarm = useSelector(selectMutedAlarm);
  const dispatch = useDispatch();
  const alarmVolumeBar = useRef(null);
  const currentLanguage = useSelector(selectCurrentLanguage);

  const updateMute = (value) => {
    dispatch(setMutedAlarm(value));
    storage.set("mutedAlarm", value);
  };

  const updateVolume = (value) => {
    dispatch(setAlarmVolume(value));
    storage.set("alarmVolume", value);
  };

  return (
    <>
      <ul className={classes.alarmSound}>
        <li onClick={() => updateMute(!mutedAlarm)}>
          <a>{translator(currentLanguage.name, "Silence")}</a>
          {mutedAlarm && (
            <span className={classes.check}>
              <img src={cheque}></img>
            </span>
          )}
        </li>
      </ul>
      <div className={classes.volumenStyle}>
        {mutedAlarm ? (
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
          ref={alarmVolumeBar}
          type="range"
          min="0"
          max="100"
          value={alarmVolume}
          onChange={() => updateVolume(alarmVolumeBar.current.value)}
        />
        <span>{alarmVolume}</span>
      </div>
    </>
  );
};

export default AlarmConfiguration;