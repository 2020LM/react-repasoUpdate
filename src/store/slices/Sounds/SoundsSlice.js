// Third-Party & Ecosystem Imports
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { BackgroundMusic } from "../../../components/sideBar/SideBarOptions/BackgroundSounds/backgroundSoundsData.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";

const songs = BackgroundMusic
const currentSong= {};
const volumeMusic = contextLoader.loadLocalStorage("soundVolume", 50)
const mutedMusic = false;


const initialState = {
  songs,
  currentSong,
  volumeMusic,
  mutedMusic,
};

const soundsSlice = createSlice({
  name: "soundsSlice",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },

    updateSong: (state, action) => {
      const { index, attribute, value } = action.payload;
      const song = state.songs[index];

      if (song && Object.hasOwn(song, attribute)) {
        song[attribute] = value;

        if (state.currentSong.id === song.id && Object.hasOwn(state.currentSong, attribute)) {
          state.currentSong[attribute] = value;
        }
      }
    },

    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setVolumeMusic: (state, action) => {
      state.volumeMusic = action.payload;
    },
    setMutedMusic: (state, action) => {
      state.mutedMusic = action.payload;
    },
  },
});

export const selectSongs = (state) => state.sounds.songs;
export const selectCurrentSong = (state) => state.sounds.currentSong;
export const selectVolumeMusic = (state) => state.sounds.volumeMusic;
export const selectMutedMusic = (state) => state.sounds.mutedMusic;

export const selectSongsByType = createSelector(
  [selectSongs, (_, type) => type],
  (songs, type) => songs.filter((item) => item.type === type)
);

export const {
  setSongs,
  updateSong,
  setCurrentSong,
  setVolumeMusic,
  setMutedMusic,
} = soundsSlice.actions;

export default soundsSlice.reducer;
