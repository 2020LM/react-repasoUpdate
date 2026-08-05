import React from "react";

import classes from "./language.module.css";
import { useEffect } from "react";
import { useLanguage, useCurrentLanguage } from "../../../../context/context";
import cheque from "../../../../assets/img/icons/cheque.webp";
import { useTranslator } from "../../../translator/translator";

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
      localStorage.setItem("language", JSON.stringify(languages[index]));
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
