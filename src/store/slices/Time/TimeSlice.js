// Third-Party & Ecosystem Imports
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports


// Internal Tools & Utilities
import storage from "../../../lib/storage.js";

const initialSeconds = storage.get("seconds", 1500);
const fixingTimer = false;
const triggeredFixingTime = false;
const secondsRestart = initialSeconds;
const timeSetByUser = false;

const initialState = {
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
    setInitialSeconds: (state, action) => {
      state.initialSeconds = action.payload;
    },

    setFixingTimer: (state, action) => {
      state.fixingTimer = action.payload;
    },

    setTriggeredFixingTime: (state, action) => {
      state.triggeredFixingTime = action.payload;
    },

    setSecondsRestart: (state, action) => {
      state.secondsRestart = action.payload;
    },

    setTimeSetByUser: (state, action) => {
      state.timeSetByUser = action.payload;
    },

    setTimerValues: (state, action) => {
      state.totalSeconds = action.payload.totalSeconds;
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
    },

  },
});

export const selectInitialSeconds = (state) => state.time.initialSeconds;
export const selectFixingTimer = (state) => state.time.fixingTimer;
export const selectTriggeredFixingTime = (state) => state.time.triggeredFixingTime;
export const selectSecondsRestart = (state) => state.time.secondsRestart;
export const selectTimeSetByUser = (state) => state.time.timeSetByUser;
export const selectTotalSeconds = (state) => state.time.totalSeconds;
export const selectSeconds = (state) => state.time.seconds;
export const selectMinutes = (state) => state.time.minutes;


export const {
  setInitialSeconds,
  setFixingTimer,
  setTriggeredFixingTime,
  setSecondsRestart,
  setTimeSetByUser,
  setTimerValues,
} = timeSlice.actions;

export default timeSlice.reducer;
