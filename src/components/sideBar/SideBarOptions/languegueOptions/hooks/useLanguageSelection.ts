// Third-Party & Ecosystem Imports
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectLanguages,
  selectCurrentLanguage,
  setLanguages as setLanguagesAction,
  setCurrentLanguage as setCurrentLanguageAction,
} from "../../../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import storage from "../../../../../lib/storage.ts";

export const useLanguageSelection = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const currentLanguage = useSelector(selectCurrentLanguage);

  // Selects a language, updates Redux, and persists the selection.
  const setLanguage = useCallback(
    (index: number) => {
      const newLanguage = languages[index];
      if (!newLanguage) return;

      const updatedLanguages = languages.map((language) => ({
        ...language,
        selected: language.id === newLanguage.id ? "true" : "false",
      }));

      const isAlreadySelected = languages.every(
        (language, languageIndex) =>
          language.selected === updatedLanguages[languageIndex].selected
      );

      if (!isAlreadySelected || currentLanguage.id !== newLanguage.id) {
        dispatch(setCurrentLanguageAction(newLanguage));
        dispatch(setLanguagesAction(updatedLanguages));
      }

      storage.set("language", updatedLanguages[index]);
    },
    [currentLanguage.id, dispatch, languages]
  );

  // Restores the saved language selection when the available languages change.
  useEffect(() => {
    const storedLanguage = storage.get<
      string | (typeof languages)[number] | undefined
    >("language");
    const storedLanguageName =
      typeof storedLanguage === "string" ? storedLanguage : storedLanguage?.name;

    if (!storedLanguageName) return;

    const storedLanguageIndex = languages.findIndex(
      (language) => language.name === storedLanguageName
    );

    if (storedLanguageIndex !== -1) {
      setLanguage(storedLanguageIndex);
    }
  }, [languages, setLanguage]);

  return { setLanguage };
};
