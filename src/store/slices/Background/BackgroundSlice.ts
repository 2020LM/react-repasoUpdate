// Third-Party & Ecosystem Imports
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { BackgroundImages } from "../../../components/sideBar/SideBarOptions/backgrounds/backgroundData.js";
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

const initialState = {
  background,
  indexBackgroundImage,
  backgroundImages,
  backgroundLoaded,
};

const backgroundSlice = createSlice({
  name: "backgroundSlice",
  initialState,
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },

    setIndexBackgroundImage: (state, action) => {
      state.indexBackgroundImage = action.payload;
    },

    setBackgroundImages: (state, action) => {
      state.backgroundImages = action.payload;
    },

    setBackgroundLoaded: (state, action) => {
      state.backgroundLoaded = action.payload;
    },
  },
});

export const selectBackground = (state: RootState) => state.background.background;
export const selectIndexBackgroundImage = (state: RootState) => state.background.indexBackgroundImage;
export const selectBackgroundImages = (state: RootState) => state.background.backgroundImages;
export const selectBackgroundLoaded = (state: RootState) => state.background.backgroundLoaded;

export const selectBackgroundImagesByType = createSelector(
  [selectBackgroundImages, (_, type) => type],
  (images, type) => images.filter((item: { type: string }) => item.type === type)
);

export const {
  setBackground,
  setIndexBackgroundImage,
  setBackgroundImages,
  setBackgroundLoaded,
} = backgroundSlice.actions;

export default backgroundSlice.reducer;

