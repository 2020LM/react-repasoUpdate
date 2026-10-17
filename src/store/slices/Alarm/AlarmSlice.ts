// Third-Party & Ecosystem Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { AlarmSoundData } from "../../../components/sideBar/SideBarOptions/alarmSounds/data/alarmSoundData.ts";
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import storage from "../../../lib/storage.js";


const alarmSounds = AlarmSoundData
type AlarmSound = (typeof AlarmSoundData)[number];

const alarmVolume: number = storage.get("alarmVolume", 50)
const storedAlarmIndex = Number(storage.get("currentAlarm", 0))
const currentAlarmIndex = Number.isInteger(storedAlarmIndex) && storedAlarmIndex >= 0 && storedAlarmIndex < alarmSounds.length
  ? storedAlarmIndex
  : 0
const currentAlarm = alarmSounds[currentAlarmIndex]
const mutedAlarm: boolean = storage.get("mutedAlarm", false)

type AlarmState = {
  alarmSounds: AlarmSound[];
  alarmVolume: number;
  currentAlarm: AlarmSound;
  mutedAlarm: boolean;
};

const initialState: AlarmState = {
  alarmSounds,
  alarmVolume,
  currentAlarm,
  mutedAlarm
};

const alarmSlice = createSlice({
  name: "alarmSlice",
  initialState,
  reducers: {
    setAlarmSounds: (state, action: PayloadAction<AlarmSound[]>) => {
      state.alarmSounds = action.payload;
    },
    setAlarmVolume: (state, action: PayloadAction<number>) => {
      state.alarmVolume = action.payload;
    },
    setCurrentAlarm: (state, action: PayloadAction<AlarmSound>) => {
        state.currentAlarm = action.payload;
    },
    setMutedAlarm: (state, action: PayloadAction<boolean>) => {
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
