// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectLanguages, selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import { translator } from "../../../../translator/translator.ts";
import cheque from "../../../../../assets/img/icons/cheque.webp";

// Local Components
import { useLanguageSelection } from "../hooks/useLanguageSelection.ts";

// Component Styles
import classes from "./language.module.css";

export const LanguageOptions = () => {
  const languages = useSelector(selectLanguages);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const { setLanguage } = useLanguageSelection();

  return (
    <>
      <h3>{translator(currentLanguage.name, "Languages")}</h3>
      <ul className={`${classes.languages}`}>
        {languages.map((item, index) => {
          return (
            <li
              className={`${classes.fixxingItemList}`}
              key={index}
            >
              <button
                type="button"
                className={classes.languageButton}
                aria-label={item.name}
                onClick={() => setLanguage(index)}
              >
                <span>{item.name}</span>
                {item.id == currentLanguage.id && (
                  <span className={classes.check}>
                    <img src={cheque} alt={item.name} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
