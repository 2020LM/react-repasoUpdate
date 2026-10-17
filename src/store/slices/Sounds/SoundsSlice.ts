// Third-Party & Ecosystem Imports
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { BackgroundMusic } from "../../../components/sideBar/SideBarOptions/BackgroundSounds/data/backgroundSoundsData.ts";
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";

const songs: BackgroundSong[] = BackgroundMusic;

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
  [K in keyof BackgroundSong]: {
    index: number;
    attribute: K;
    value: BackgroundSong[K];
  };
}[keyof BackgroundSong];

const currentSong: Partial<BackgroundSong> = {};
const volumeMusic: number = contextLoader.loadLocalStorage(
  "backgroundSoundVolume",
  contextLoader.loadLocalStorage("backgroundSoundAudio", 50)
);
const mutedMusic: boolean = contextLoader.loadLocalStorage(
  "mutedMusic",
  false
);


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
    setSongs: (state, action: PayloadAction<BackgroundSong[]>) => {
      state.songs = action.payload;
    },

    updateSong: (state, action: PayloadAction<UpdateSongPayload>) => {
      const { index, attribute, value } = action.payload;
      const song = state.songs[index];

      if (song && Object.hasOwn(song, attribute)) {
        Object.assign(song, { [attribute]: value });

        if (state.currentSong.id === song.id && Object.hasOwn(state.currentSong, attribute)) {
          Object.assign(state.currentSong, { [attribute]: value });
        }
      }
    },

    setCurrentSong: (state, action: PayloadAction<Partial<BackgroundSong>>) => {
      state.currentSong = action.payload;
    },
    setVolumeMusic: (state, action: PayloadAction<number>) => {
      state.volumeMusic = action.payload;
    },
    setMutedMusic: (state, action: PayloadAction<boolean>) => {
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
