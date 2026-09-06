// Third-Party & Ecosystem Imports
import React, { useEffect } from "react";

// Architecture & Global State Imports

import { translator } from "../../../translator/translator";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguages, selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";
import { setLanguages as setLanguageAction, setCurrentLanguage as setCurrentLanguageAction} from "../../../../store/slices/Languages/LanguageSlice.js";

// Internal Tools & Utilities
import storage from "../../../../lib/storage";
import cheque from "../../../../assets/img/icons/cheque.webp";

// Component Styles
import classes from "./language.module.css";

export const LanguagueOptions = () => {
  const languages = useSelector(selectLanguages);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const dispatch = useDispatch();

  const setLanguages = (languages) => {
    dispatch(setLanguageAction(languages));
  }

  const setCurrentLanguage = (language) => {
    dispatch(setCurrentLanguageAction(language));
  };

  const setLanguage = (index) => {
    const newLanguage = languages[index];

    setCurrentLanguage(newLanguage);
    const updatedLanguagues = languages.map((item) => ({
      ...item,
      selected: item.id === newLanguage.id ? "true" : "false",
    }));

    setLanguages(updatedLanguagues);
    storage.set("language", updatedLanguagues[index]);
  };

  useEffect(() => {
    const storedLanguageName = storage.get("language");
    if (storedLanguageName !== undefined && storedLanguageName !== null) {
      const storedLanguageIndex = languages.findIndex(item => item.name === storedLanguageName);
      if (storedLanguageIndex !== -1) {
        setLanguage(storedLanguageIndex);
      }
    }
  }, []);

  return (
    <>
      <h3>{translator(currentLanguage.name, "Languages")}</h3>
      <ul className={`${classes.languages}`}>
        {languages.map((item, index) => {
          return (
            <li
              className={`${classes.fixxingItemList}`}
              key={index}
              onClick={() => {
                setLanguage(index);
              }}
            >
              <a>{item.name}</a>
              {item.id == currentLanguage.id && (
                <span className={classes.check}>
                  <img src={cheque}></img>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
