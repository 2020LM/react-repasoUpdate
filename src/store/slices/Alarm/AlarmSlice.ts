// Third-Party & Ecosystem Imports
import { createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { AlarmSoundData } from "../../../components/sideBar/SideBarOptions/alarmSounds/alarmSoundData.js";
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import storage from "../../../lib/storage.js";


const alarmSounds = AlarmSoundData
const alarmVolume = storage.get("alarmVolume", 50)
const storedAlarmIndex = Number(storage.get("currentAlarm", 0))
const currentAlarmIndex = Number.isInteger(storedAlarmIndex) && storedAlarmIndex >= 0 && storedAlarmIndex < alarmSounds.length
  ? storedAlarmIndex
  : 0
const currentAlarm = alarmSounds[currentAlarmIndex]
const mutedAlarm = storage.get("mutedAlarm", false)

const initialState = {
  alarmSounds,
  alarmVolume,
  currentAlarm,
  mutedAlarm
};

const alarmSlice = createSlice({
  name: "alarmSlice",
  initialState,
  reducers: {
    setAlarmSounds: (state, action) => {
      state.alarmSounds = action.payload;
    },
    setAlarmVolume: (state, action) => {
      state.alarmVolume = action.payload;
    },
    setCurrentAlarm: (state, action) => {
        state.currentAlarm = action.payload;
    },
    setMutedAlarm: (state, action) => {
        state.mutedAlarm = action.payload;
    },
  },
});

export const selectAlarmSounds = (state: RootState) => state.alarm.alarmSounds;
export const selectAlarmVolume = (state: RootState) => state.alarm.alarmVolume;
export const selectCurrentAlarm = (state: RootState) => state.alarm.currentAlarm;
export const selectMutedAlarm = (state: RootState) => state.alarm.mutedAlarm;

export const {
  setAlarmSounds,
  setAlarmVolume,
  setCurrentAlarm,
  setMutedAlarm,
} = alarmSlice.actions;

export default alarmSlice.reducer;
