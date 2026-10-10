// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { translator } from "../../../translator/translator.js";
import { selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";
import { setRightArrow as setRightArrowAction } from "../../../../store/slices/SideBar/SideBarSlice.js";
import { useDispatch } from "react-redux";

// Internal Tools & Utilities
import backgroundIcon from "../../../../assets/img/icons/fondo_4_11zon_109_11zon.webp";
import bell from "../../../../assets/img/icons/campana_15_11zon_99_11zon.webp";
import soundsIcon from "../../../../assets/img/icons/musica_10_11zon_123_11zon.webp";
import languagesIcon from "../../../../assets/img/icons/languages.webp";
import focusTimerIcon from "../../../../../favicons/favIcons.webp";

// Component Styles
import classes from "./mainMenu.module.css";

export const MainMenu = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);
  
  const dispatch = useDispatch();

  const setRightArrow = (value: boolean) => {
    dispatch(setRightArrowAction(value));
  }

  const carouselItemProps = (slide: number, label: string) => ({
    type: "button" as const,
    "aria-label": label,
    "data-bs-target": "#carouselExampleControls",
    "data-bs-slide-to": String(slide),
    className: classes.menuOptionButton,
    onClick: () => setRightArrow(true),
  });

  return (
    <>
      <li>
        <button {...carouselItemProps(1, translator(currentLanguage.name, "Change Background"))}>
          <img src={backgroundIcon} className={classes.optionIcon} alt="" />{" "}
          {translator(currentLanguage.name, "Change Background")}
        </button>
      </li>
      <li>
        <button {...carouselItemProps(2, translator(currentLanguage.name, "Set Alarm"))}>
          <img src={bell} className={classes.optionIcon} alt="" />
          {translator(currentLanguage.name, "Set Alarm")}
        </button>
      </li>
      <li>
        <button {...carouselItemProps(3, translator(currentLanguage.name, "Set Music"))}>
          <img src={soundsIcon} className={classes.optionIcon} alt="" />{" "}
          {translator(currentLanguage.name, "Set Music")}{" "}
        </button>
      </li>

      <li>
        <button {...carouselItemProps(4, translator(currentLanguage.name, "Set Language"))}>
          <img src={languagesIcon} className={classes.optionIcon} alt="" />{" "}
          {translator(currentLanguage.name, "Set Language")}
        </button>
      </li>
      <li>
        <button {...carouselItemProps(5, translator(currentLanguage.name, "Focus Timer"))}>
          <img src={focusTimerIcon} className={classes.optionIcon} alt="" />{" "}
          {translator(currentLanguage.name, "Focus Timer")}
        </button>
      </li>
    </>
  );
};
