// Third-Party & Ecosystem Imports
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { BackgroundMusic } from "../../../components/sideBar/SideBarOptions/BackgroundSounds/backgroundSoundsData.js";
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";

const songs = BackgroundMusic

export type BackgroundSong = {
  id: number;
  isPlaying: string | boolean;
  song: string;
  duration: number;
  type: string;
  repeat: string | boolean;
  currentTime: number;
};

type SoundsState = {
  songs: BackgroundSong[];
  currentSong: Partial<BackgroundSong>;
  volumeMusic: number;
  mutedMusic: boolean;
};

type UpdateSongPayload = {
  index: number;
  attribute: keyof BackgroundSong;
  value: BackgroundSong[keyof BackgroundSong];
};

const currentSong: Partial<BackgroundSong> = {};
const volumeMusic = contextLoader.loadLocalStorage("soundVolume", 50)
const mutedMusic = false;


const initialState: SoundsState = {
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

    updateSong: (state, action: { payload: UpdateSongPayload }) => {
      const { index, attribute, value } = action.payload;
      const song = state.songs[index];

      if (song && Object.hasOwn(song, attribute)) {
        (song[attribute] as BackgroundSong[keyof BackgroundSong]) = value;

        if (state.currentSong.id === song.id && Object.hasOwn(state.currentSong, attribute)) {
          (state.currentSong[attribute] as BackgroundSong[keyof BackgroundSong]) = value;
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

export const selectSongs = (state: RootState) => state.sounds.songs;
export const selectCurrentSong = (state: RootState) => state.sounds.currentSong;
export const selectVolumeMusic = (state: RootState) => state.sounds.volumeMusic;
export const selectMutedMusic = (state: RootState) => state.sounds.mutedMusic;

export const selectSongsByType = createSelector(
  [selectSongs, (_: RootState, type: string) => type],
  (songs, type) => songs.filter((item: BackgroundSong) => item.type === type)
);

export const {
  setSongs,
  updateSong,
  setCurrentSong,
  setVolumeMusic,
  setMutedMusic,
} = soundsSlice.actions;

export default soundsSlice.reducer;
