// Third-Party & Ecosystem Imports
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { BackgroundImages } from "../../../components/sideBar/SideBarOptions/backgrounds/data/backgroundData.ts";
import type { BackgroundItem } from "../../../components/sideBar/SideBarOptions/backgrounds/data/ObjectDescription.js";
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";
import image from "../../../assets/img/backgrounds/Anime/3_5_11zon_253_11zon.webp";
import image2 from "../../../assets/img/backgrounds/Anime/3V_6_11zon_255_11zon.webp";

const background = contextLoader.loadLocalStorage(
  contextLoader.selectLoadLocalStogare(
    "backgroundImage",
    "backgroundAlternativeImage"
  ),
  contextLoader.selectImage(image, image2)
);

const indexBackgroundImage = contextLoader.loadLocalStorage(
  "indexBackgroundImage",
  9
);
const backgroundImages = BackgroundImages;
const backgroundLoaded = false;

type BackgroundState = {
  background: string;
  indexBackgroundImage: number;
  backgroundImages: BackgroundItem[];
  backgroundLoaded: boolean;
};

const initialState: BackgroundState = {
  background,
  indexBackgroundImage,
  backgroundImages,
  backgroundLoaded,
};

const backgroundSlice = createSlice({
  name: "backgroundSlice",
  initialState,
  reducers: {
    setBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    },

    setIndexBackgroundImage: (state, action: PayloadAction<number>) => {
      state.indexBackgroundImage = action.payload;
    },

    setBackgroundImages: (state, action: PayloadAction<BackgroundItem[]>) => {
      state.backgroundImages = action.payload;
    },

    setBackgroundLoaded: (state, action: PayloadAction<boolean>) => {
      state.backgroundLoaded = action.payload;
    },
  },
});

export const selectBackground = (state: RootState) => state.background.background;
export const selectIndexBackgroundImage = (state: RootState) => state.background.indexBackgroundImage;
export const selectBackgroundImages = (state: RootState) => state.background.backgroundImages;
export const selectBackgroundLoaded = (state: RootState) => state.background.backgroundLoaded;

export const selectBackgroundImagesByType = createSelector(
  [selectBackgroundImages, (_: RootState, type: string) => type],
  (images, type) => images.filter((item) => item.type === type)
);

export const {
  setBackground,
  setIndexBackgroundImage,
  setBackgroundImages,
  setBackgroundLoaded,
} = backgroundSlice.actions;

export default backgroundSlice.reducer;
