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
import storage from "../../../../../lib/storage.js";
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.js";
import { translator } from "../../../../translator/translator.js";

import classes from "../alarmSounds.module.css";

export const AlarmConfiguration = () => {
  const alarmVolume = useSelector(selectAlarmVolume);
  const mutedAlarm = useSelector(selectMutedAlarm);
  const dispatch = useDispatch();
  const alarmVolumeBar = useRef<HTMLInputElement | null>(null);
  const currentLanguage = useSelector(selectCurrentLanguage);

  const updateMute = (value: boolean) => {
    dispatch(setMutedAlarm(value));
    storage.set("mutedAlarm", value);
  };

  const updateVolume = (value: number) => {
    dispatch(setAlarmVolume(value));
    storage.set("alarmVolume", value);
  };

  return (
    <>
      <ul className={classes.alarmSound}>
        <li>
          <button
            type="button"
            className={classes.alarmOption}
            aria-label={translator(currentLanguage.name, "Silence")}
            aria-pressed={mutedAlarm}
            onClick={() => updateMute(!mutedAlarm)}
          >
            <a>{translator(currentLanguage.name, "Silence")}</a>
            {mutedAlarm && (
              <span className={classes.check}>
                <img src={cheque} alt="" />
              </span>
            )}
          </button>
        </li>
      </ul>
      <div className={classes.volumenStyle}>
        {mutedAlarm ? (
          <button
            type="button"
            className={classes.volumeButton}
            aria-label="Unmute button"
            onClick={() => updateMute(false)}
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
            className={classes.volumeButton}
            aria-label="Mute"
            onClick={() => updateMute(true)}
          >
            <img
              className={classes.volumenIcon}
              src={volumeIcon}
              alt=""
            />
          </button>
        )}
        <input
          ref={alarmVolumeBar}
          type="range"
          min="0"
          max="100"
          value={alarmVolume}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateVolume(Number(event.target.value))}
        />
        <span>{alarmVolume}</span>
      </div>
    </>
  );
};
