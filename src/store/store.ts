// Third-Party & Ecosystem Imports
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import { createLogger } from 'redux-logger';

// Architecture & Global State Imports
import backgroundReducer from './slices/Background/BackgroundSlice.js';
import sideBarReducer from './slices/SideBar/SideBarSlice.js';
import alarmReducer from './slices/Alarm/AlarmSlice.js';
import languageReducer from './slices/Languages/LanguageSlice.js';
import timeReducer from './slices/Time/TimeSlice.js';
import soundsReducer from './slices/Sounds/SoundsSlice.js';
/*
const logger = createLogger({
  collapsed: true,
});
*/

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    sideBar: sideBarReducer,
    alarm: alarmReducer,
    language: languageReducer,
    time: timeReducer,
    sounds: soundsReducer,
  },
  /*
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  */
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;