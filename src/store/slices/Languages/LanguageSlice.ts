// Third-Party & Ecosystem Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Architecture & Global State Imports
import { LanguageData } from "../../../components/sideBar/SideBarOptions/languegueOptions/data/languageData.ts"
import { RootState } from "../../store.js";

// Internal Tools & Utilities
import contextLoader from "../../../lib/ContextLoader.js";

const languages = LanguageData
type Language = (typeof LanguageData)[number];

const currentLanguage: Language = contextLoader.loadLocalStorage("language", languages[0])

type LanguageState = {
    languages: Language[];
    currentLanguage: Language;
};

const initialState: LanguageState = {
    languages,
    currentLanguage
};

const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    setLanguages: (state, action: PayloadAction<Language[]>) => {
      state.languages = action.payload;
    },

    setCurrentLanguage: (state, action: PayloadAction<Language>) => {
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
