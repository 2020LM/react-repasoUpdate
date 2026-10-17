// Third-Party & Ecosystem Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { RootState } from "../../store.js";


// Internal Tools & Utilities
import storage from "../../../lib/storage.js";

const initialSeconds: number = storage.get("seconds", 1500);
const fixingTimer = false;
const triggeredFixingTime = false;
const secondsRestart = initialSeconds;
const timeSetByUser = false;

type TimerValues = {
  totalSeconds: number;
  seconds: number;
  minutes: number;
};

type TimeState = {
  initialSeconds: number;
  fixingTimer: boolean;
  triggeredFixingTime: boolean;
  secondsRestart: number;
  timeSetByUser: boolean;
} & TimerValues;

const initialState: TimeState = {
  initialSeconds,
  fixingTimer,
  triggeredFixingTime,
  secondsRestart,
  timeSetByUser,
  totalSeconds: initialSeconds,
  seconds: initialSeconds % 60,
  minutes: Math.floor(initialSeconds / 60),
};

const timeSlice = createSlice({
  name: "timeSlice",
  initialState,
  reducers: {
    setInitialSeconds: (state, action: PayloadAction<number>) => {
      state.initialSeconds = action.payload;
    },

    setFixingTimer: (state, action: PayloadAction<boolean>) => {
      state.fixingTimer = action.payload;
    },

    setTriggeredFixingTime: (state, action: PayloadAction<boolean>) => {
      state.triggeredFixingTime = action.payload;
    },

    setSecondsRestart: (state, action: PayloadAction<number>) => {
      state.secondsRestart = action.payload;
    },

    setTimeSetByUser: (state, action: PayloadAction<boolean>) => {
      state.timeSetByUser = action.payload;
    },

    setTimerValues: (state, action: PayloadAction<TimerValues>) => {
      state.totalSeconds = action.payload.totalSeconds;
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
    },

  },
});

export const selectInitialSeconds = (state: RootState) => state.time.initialSeconds;
export const selectFixingTimer = (state: RootState) => state.time.fixingTimer;
export const selectTriggeredFixingTime = (state: RootState) => state.time.triggeredFixingTime;
export const selectSecondsRestart = (state: RootState) => state.time.secondsRestart;
export const selectTimeSetByUser = (state: RootState) => state.time.timeSetByUser;
export const selectTotalSeconds = (state: RootState) => state.time.totalSeconds;
export const selectSeconds = (state: RootState) => state.time.seconds;
export const selectMinutes = (state: RootState) => state.time.minutes;


export const {
  setInitialSeconds,
  setFixingTimer,
  setTriggeredFixingTime,
  setSecondsRestart,
  setTimeSetByUser,
  setTimerValues,
} = timeSlice.actions;

export default timeSlice.reducer;
