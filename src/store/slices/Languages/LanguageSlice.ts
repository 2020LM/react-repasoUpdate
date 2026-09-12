// Third-Party & Ecosystem Imports
import { createSlice } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { LanguageData } from "../../../components/sideBar/SideBarOptions/languegueOptions/languageData.js"
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";

const languages = LanguageData
const currentLanguage = contextLoader.loadLocalStorage("language", languages[0])

const initialState = {
    languages,
    currentLanguage
};

const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },

    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },

  },
});

export const selectLanguages = (state: RootState) => state.language.languages;
export const selectCurrentLanguage = (state: RootState) => state.language.currentLanguage;

export const {
  setLanguages,
  setCurrentLanguage,
} = languageSlice.actions;

export default languageSlice.reducer;
