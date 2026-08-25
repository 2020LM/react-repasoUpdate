// Third-Party & Ecosystem Imports
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// Architecture & Global State Imports
import backgroundReducer from './slices/Background/BackgroundSlice.js';
import sideBarReducer from './slices/SideBar/SideBar.js';
import alarmReducer from './slices/Alarm/AlarmSlice.js';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    sideBar: sideBarReducer,
    alarm: alarmReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store