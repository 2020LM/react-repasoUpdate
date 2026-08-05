import React from "react";

import { Fragment, useEffect } from "react";
import classes from "./backgrounds.module.css";
import { useTranslator } from "../../../translator/translator";
import { useCurrentLanguage } from "../../../../context/context";
import { BackgroundByType } from "./backgroundByType";
import { useBackground } from "../../../../context/context";
import {
  NATURE,
  ANIME,
  CAFE,
  CLASSICAL,
  JAZZ,
  RUNNING,
  INDIA,
  GRADIENTS,
  SOLIDS,
} from "../../../../General/generalVariables";

export const Backgrounds = () => {
  const [background, setBackground] = useBackground();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  useEffect(() => {}, [window.innerWidth]);
  return (
    <>
      <div className={`${classes.bigContainer}`}>
        <h3>{useTranslator(currentLanguage.name, NATURE)}</h3>
        <BackgroundByType type={NATURE} />
        <h3>{useTranslator(currentLanguage.name, ANIME)}</h3>
        <BackgroundByType type={ANIME} />
        <h3>{useTranslator(currentLanguage.name, CAFE)}</h3>
        <BackgroundByType type={CAFE} />
        <h3>{useTranslator(currentLanguage.name, CLASSICAL)}</h3>
        <BackgroundByType type={CLASSICAL} />
        <h3>{useTranslator(currentLanguage.name, JAZZ)}</h3>
        <BackgroundByType type={JAZZ} />
        <h3>{useTranslator(currentLanguage.name, RUNNING)}</h3>
        <BackgroundByType type={RUNNING} />
        <h3>{useTranslator(currentLanguage.name, INDIA)}</h3>
        <BackgroundByType type={INDIA} />
        <h3>{useTranslator(currentLanguage.name, GRADIENTS)}</h3>
        <BackgroundByType type={GRADIENTS} />
        <h3>{useTranslator(currentLanguage.name, SOLIDS)}</h3>
        <BackgroundByType type={SOLIDS} />
      </div>
    </>
  );
};
