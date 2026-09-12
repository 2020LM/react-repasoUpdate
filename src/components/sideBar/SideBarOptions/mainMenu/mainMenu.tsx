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

  const carouselItemProps = (slide: number) => ({
    type: "button" as const,
    "data-bs-target": "#carouselExampleControls",
    "data-bs-slide-to": String(slide),
    onClick: () => setRightArrow(true),
  });

  const carouselSpanProps = (slide: number) => ({
    href: "#carouselExampleControls",
    role: "button" as const,
    "data-slide": String(slide),
  });

  return (
    <>
      <li {...carouselItemProps(1)}>
        <a>
          <span {...carouselSpanProps(1)}>
            <img src={backgroundIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Change Background")}
          </span>
        </a>
      </li>
      <li {...carouselItemProps(2)}>
        <a>
          <span {...carouselSpanProps(2)}>
            <img src={bell} className={classes.optionIcon}></img>
            {translator(currentLanguage.name, "Set Alarm")}
          </span>
        </a>
      </li>
      <li {...carouselItemProps(3)}>
        <a>
          <span {...carouselSpanProps(3)}>
            <img src={soundsIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Set Music")}{" "}
          </span>
        </a>
      </li>

      <li {...carouselItemProps(4)}>
        <a>
          <span {...carouselSpanProps(4)}>
            <img src={languagesIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Set Language")}
          </span>
        </a>
      </li>
      <li {...carouselItemProps(5)}>
        <a>
          <span {...carouselSpanProps(5)}>
            <img src={focusTimerIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Focus Timer")}
          </span>
        </a>
      </li>
    </>
  );
};
