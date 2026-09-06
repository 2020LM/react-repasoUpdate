// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { translator } from "../../../translator/translator";
import { selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";
import { setRightArrow as setRightArrowAction } from "../../../../store/slices/SideBar/SideBar.js";
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

  const setRightArrow = (value) => {
    dispatch(setRightArrowAction(value));
  }

  return (
    <>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="1"
        onClick={() => setRightArrow(true)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="1">
            <img src={backgroundIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Change Background")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="2"
        onClick={() => setRightArrow(true)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="2">
            <img src={bell} className={classes.optionIcon}></img>
            {translator(currentLanguage.name, "Set Alarm")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="3"
        onClick={() => setRightArrow(true)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="3">
            <img src={soundsIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Set Music")}{" "}
          </span>
        </a>
      </li>

      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="4"
        onClick={() => setRightArrow(true)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="4">
            <img src={languagesIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Set Language")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="5"
        onClick={() => setRightArrow(true)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="5">
            <img src={focusTimerIcon} className={classes.optionIcon}></img>{" "}
            {translator(currentLanguage.name, "Focus Timer")}
          </span>
        </a>
      </li>
    </>
  );
};
