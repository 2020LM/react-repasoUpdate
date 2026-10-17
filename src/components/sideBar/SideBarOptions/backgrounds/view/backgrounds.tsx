// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import { translator } from "../../../../translator/translator.ts";
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
} from "../../../../../General/generalVariables.ts";

// Local Components
import { BackgroundByType } from "./backgroundByType.tsx";

// Component Styles
import classes from "./backgrounds.module.css";

export const Backgrounds = () => {

  const currentLanguage = useSelector(selectCurrentLanguage);

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
