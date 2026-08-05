import React from "react";

import { Fragment, useEffect } from "react";
import {
  useAlarmSounds,
  useCurrentAlarm,
  useAlarmVolume,
  useMutedAlarm,
  useCurrentLanguage,
} from "../../../../context/context";
import classes from "./alarmSounds.module.css";
import cheque from "../../../../assets/img/icons/cheque.webp";
import { useRef } from "react";
import volumeIcon from "../../../../assets/img/icons/volumen_13_11zon_128_11zon.webp";
import muted from "../../../../assets/img/icons/mute.webp";
import { useTranslator } from "../../../translator/translator";

export const AlarmSound = () => {
  const [alarmSounds, setAlarmSounds] = useAlarmSounds();
  const [currentAlarm, setCurrentAlarm] = useCurrentAlarm();
  const [alarmVolume, setAlarmVolume] = useAlarmVolume();
  const alarmVolumeBar = useRef(null);
  const [mute, setMute] = useMutedAlarm();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  const setAlarm = (index) => {
    if (index < alarmSounds.length) {
      if (currentAlarm.id - 1 != index) {
        updateAlarm(currentAlarm.id - 1, "selected", "false");
        updateAlarm(index, "selected", "true");

        setCurrentAlarm(alarmSounds[index]);
      }

      localStorage.setItem("currentAlarm", index);
      alarmSounds[index].audio.play();
    }
    return;
  };

  const updateAlarm = (index, attribute, value) => {
    const updatedAlarmSounds = [...alarmSounds];
    if (attribute == "id") {
      updatedAlarmSounds[index].id = value;
    } else if (attribute == "sound") {
      updatedAlarmSounds[index].sound = value;
    } else if (attribute == "selected") {
      updatedAlarmSounds[index].selected = value;
    }

    setAlarmSounds(updatedAlarmSounds);
  };

  const updateMute = (bool) => {
    if (bool) {
      setMute(true);
      updateAlarm(currentAlarm.id - 1, "selected", "false");
      return;
    }
    setMute(false);
    updateAlarm(currentAlarm.id - 1, "selected", "true");
  };

  useEffect(() => {
    let volume = alarmVolume / 100;
    alarmSounds.map((item, index) => {
      item.audio.volume = volume;
    });
    const updateCurrentAlarm = { ...currentAlarm };
    updateCurrentAlarm.audio.volume = volume;
    setCurrentAlarm(updateCurrentAlarm);

    localStorage.setItem("alarmVolume", alarmVolume);
    if (alarmVolume == 0) {
      updateMute(true);
      return;
    }
    updateMute(false);
  }, [alarmVolume]);

  useEffect(() => {
    alarmSounds.map((item, index) => {
      item.audio.muted = mute;
    });
    const updateCurrentAlarm = { ...currentAlarm };
    updateCurrentAlarm.audio.muted = mute;
    setCurrentAlarm(updateCurrentAlarm);
  }, [mute]);

  useEffect(() => {
    updateAlarm(currentAlarm.id - 1, "selected", "true");
  }, []);

  return (
    <>
      <h3>{useTranslator(currentLanguage.name, "Alarms")}</h3>
      <ul className={`${classes.alarmSound}`}>
        {alarmSounds.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setAlarm(index);
              }}
            >
              <a>
                {useTranslator(currentLanguage.name, `Alarm`)} {item.id}
              </a>
              {item.selected == "true" && (
                <span className={classes.check}>
                  <img src={cheque}></img>
                </span>
              )}
            </li>
          );
        })}

        <li onClick={() => updateMute(!mute)}>
          <a>{useTranslator(currentLanguage.name, `Silence`)}</a>
          {mute && (
            <span className={classes.check}>
              <img src={cheque}></img>
            </span>
          )}
        </li>
      </ul>

      <div className={classes.volumenStyle}>
        {mute ? (
          <span>
            {" "}
            <img
              className={classes.volumenIcon}
              src={muted}
              onClick={() => updateMute(false)}
            ></img>
          </span>
        ) : (
          <span>
            {" "}
            <img
              className={classes.volumenIcon}
              src={volumeIcon}
              onClick={() => updateMute(true)}
            ></img>
          </span>
        )}
        <input
          ref={alarmVolumeBar}
          type="range"
          min="0"
          max="100"
          value={alarmVolume}
          onChange={() => setAlarmVolume(alarmVolumeBar.current.value)}
        />
        <span>{alarmVolume}</span>
      </div>
    </>
  );
};
