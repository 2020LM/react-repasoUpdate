import classes from "./mainMenu.module.css";
import { useTranslator } from "../../../translator/translator";
import backgroundIcon from "../../../../assets/img/icons/fondo_4_11zon_109_11zon.webp";
import bell from "../../../../assets/img/icons/campana_15_11zon_99_11zon.webp";
import soundsIcon from "../../../../assets/img/icons/musica_10_11zon_123_11zon.webp";
import languagesIcon from "../../../../assets/img/icons/languages.webp";
import { useCurrentLanguage, useRightArrow } from "../../../../context/context";
import focusTimerIcon from "../../../../assets/img/icons/time-and-date_11_11zon_126_11zon.webp";

export const MainMenu = () => {
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();
  const [putOptions, setPutOptions] = useRightArrow();

  return (
    <>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="1"
        onClick={() => setPutOptions(false)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="1">
            <img src={backgroundIcon} className={classes.optionIcon}></img>{" "}
            {useTranslator(currentLanguage.name, "Change Background")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="2"
        onClick={() => setPutOptions(false)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="2">
            <img src={bell} className={classes.optionIcon}></img>
            {useTranslator(currentLanguage.name, "Set Alarm")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="3"
        onClick={() => setPutOptions(false)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="3">
            <img src={soundsIcon} className={classes.optionIcon}></img>{" "}
            {useTranslator(currentLanguage.name, "Set Music")}{" "}
          </span>
        </a>
      </li>

      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="4"
        onClick={() => setPutOptions(false)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="4">
            <img src={languagesIcon} className={classes.optionIcon}></img>{" "}
            {useTranslator(currentLanguage.name, "Set Language")}
          </span>
        </a>
      </li>
      <li
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="5"
        onClick={() => setPutOptions(false)}
      >
        <a>
          <span href="#carouselExampleControls" role="button" data-slide="5">
            <img src={focusTimerIcon} className={classes.optionIcon}></img>{" "}
            {useTranslator(currentLanguage.name, "Focus Timer")}
          </span>
        </a>
      </li>
    </>
  );
};
