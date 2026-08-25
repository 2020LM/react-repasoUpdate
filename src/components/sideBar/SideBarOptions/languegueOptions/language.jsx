// Third-Party & Ecosystem Imports
import React, { useEffect } from "react";

// Architecture & Global State Imports
import { useLanguage, useCurrentLanguage } from "../../../../context/context";
import { useTranslator } from "../../../translator/translator";

// Internal Tools & Utilities
import storage from "../../../../lib/storage";
import cheque from "../../../../assets/img/icons/cheque.webp";

// Component Styles
import classes from "./language.module.css";

export const LanguagueOptions = () => {
  const [languages, setLanguages] = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  const updateLanguagues = (index, attribute, value) => {
    const updatedLanguages = [...languages];
    if (attribute == "name") {
      languages[index].id = value;
    } else if (attribute == "selected") {
      languages[index].selected = value;
    }

    setLanguages(updatedLanguages);
  };

  const setLanguage = (index) => {
    if (currentLanguage.id - 1 != index) {
      updateLanguagues(currentLanguage.id - 1, "selected", "false");
      updateLanguagues(index, "selected", "true");
      setCurrentLanguage(languages[index]);
      storage.set("language", languages[index]);
    }
  };

  useEffect(() => {
    updateLanguagues(currentLanguage.id - 1, "selected", "true");
  }, []);

  return (
    <>
      <h3>{useTranslator(currentLanguage.name, "Languages")}</h3>
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
              {item.selected == "true" && (
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
