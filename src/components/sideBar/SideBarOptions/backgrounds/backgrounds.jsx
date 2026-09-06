// Third-Party & Ecosystem Imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { translator } from "../../../translator/translator";
import { selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";
import { BackgroundByType } from "./backgroundByType";
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

// Component Styles
import classes from "./backgrounds.module.css";

export const Backgrounds = () => {

  const currentLanguage = useSelector(selectCurrentLanguage);

  useEffect(() => {}, [window.innerWidth]);
  return (
    <>
      <div className={`${classes.bigContainer}`}>
        <h3>{translator(currentLanguage.name, NATURE)}</h3>
        <BackgroundByType type={NATURE} />
        <h3>{translator(currentLanguage.name, ANIME)}</h3>
        <BackgroundByType type={ANIME} />
        <h3>{translator(currentLanguage.name, CAFE)}</h3>
        <BackgroundByType type={CAFE} />
        <h3>{translator(currentLanguage.name, CLASSICAL)}</h3>
        <BackgroundByType type={CLASSICAL} />
        <h3>{translator(currentLanguage.name, JAZZ)}</h3>
        <BackgroundByType type={JAZZ} />
        <h3>{translator(currentLanguage.name, RUNNING)}</h3>
        <BackgroundByType type={RUNNING} />
        <h3>{translator(currentLanguage.name, INDIA)}</h3>
        <BackgroundByType type={INDIA} />
        <h3>{translator(currentLanguage.name, GRADIENTS)}</h3>
        <BackgroundByType type={GRADIENTS} />
        <h3>{translator(currentLanguage.name, SOLIDS)}</h3>
        <BackgroundByType type={SOLIDS} />
      </div>
    </>
  );
};
