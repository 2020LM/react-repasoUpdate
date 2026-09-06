// Third-Party & Ecosystem Imports
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectAlarmVolume,
  selectCurrentAlarm,
  selectMutedAlarm,
} from "../../../store/slices/Alarm/AlarmSlice.js";
import {
  selectTotalSeconds,
  selectSeconds,
  selectMinutes,
} from "../../../store/slices/Time/TimeSlice.js";

export const AlarmAudioManager = () => {
  const currentAlarm = useSelector(selectCurrentAlarm);
  const alarmVolume = useSelector(selectAlarmVolume);
  const mutedAlarm = useSelector(selectMutedAlarm);

  const totalSeconds = useSelector(selectTotalSeconds);
  const seconds = useSelector(selectSeconds);
  const minutes = useSelector(selectMinutes);

  const audioRef = useRef(null);
  const previousAlarmIdRef = useRef(currentAlarm.id);

  useEffect(() => {
    const audio = new Audio(currentAlarm.sound);
    audio.volume = Number(alarmVolume) / 100;
    audio.muted = mutedAlarm;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
    };
  }, [currentAlarm.sound]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = Number(alarmVolume) / 100;
    audioRef.current.muted = mutedAlarm;
  }, [alarmVolume, mutedAlarm]);

  useEffect(() => {
    const alarmChanged = previousAlarmIdRef.current !== currentAlarm.id;
    const timerFinished =
      !mutedAlarm &&
      totalSeconds === 0 &&
      minutes === 0 &&
      seconds === 0;

    if (!mutedAlarm && (timerFinished || alarmChanged)) {
      audioRef.current?.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    previousAlarmIdRef.current = currentAlarm.id;
  }, [currentAlarm.id, totalSeconds, minutes, seconds, mutedAlarm]);


  return null;
};
