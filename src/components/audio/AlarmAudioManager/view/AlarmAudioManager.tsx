// Third-Party & Ecosystem Imports
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectAlarmVolume,
  selectCurrentAlarm,
  selectMutedAlarm,
} from "../../../../store/slices/Alarm/AlarmSlice.ts";
import {
  selectTotalSeconds,
  selectSeconds,
  selectMinutes,
} from "../../../../store/slices/Time/TimeSlice.ts";

// Local Components
import { useAlarmAudio } from "../hooks/useAlarmHooks.ts";

export const AlarmAudioManager = () => {
  const currentAlarm = useSelector(selectCurrentAlarm);
  const alarmVolume = useSelector(selectAlarmVolume);
  const mutedAlarm = useSelector(selectMutedAlarm);

  const totalSeconds = useSelector(selectTotalSeconds);
  const seconds = useSelector(selectSeconds);
  const minutes = useSelector(selectMinutes);

  useAlarmAudio({
    alarmId: currentAlarm.id,
    sound: currentAlarm.sound,
    volume: alarmVolume,
    muted: mutedAlarm,
    totalSeconds,
    seconds,
    minutes,
  });

  return null;
};
