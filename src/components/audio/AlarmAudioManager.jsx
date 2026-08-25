import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useSelector } from "react-redux";

import {
  selectAlarmVolume,
  selectCurrentAlarm,
  selectMutedAlarm,
} from "../../store/slices/Alarm/AlarmSlice.js";

export const AlarmAudioManager = forwardRef(function AlarmAudioManager(_, ref) {
  const currentAlarm = useSelector(selectCurrentAlarm);
  const alarmVolume = useSelector(selectAlarmVolume);
  const mutedAlarm = useSelector(selectMutedAlarm);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(currentAlarm.sound);
    audio.volume = Number(alarmVolume) / 100;
    audio.muted = mutedAlarm;
    audioRef.current = audio;

     if (!mutedAlarm) {
       audio.play().catch((error) => {
         console.error("Error playing audio:", error);
       });
    }


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

  useImperativeHandle(ref, () => ({
    play() {
      return audioRef.current?.play();
    },
  }), []);

  return null;
});
