import { Fragment, useRef } from "react";
import {
  useVolumeMusic,
  useMutedMusic,
  useCurrentLanguage,
} from "../../../../context/context";
import { SongByType } from "./songByType";
import classes from "./backgroundSounds.module.css";
import volumeIcon from "../../../../assets/img/icons/volumen_13_11zon_128_11zon.webp";
import muted from "../../../../assets/img/icons/mute.webp";
import { useTranslator } from "../../../translator/translator";

export const BackgroundSounds = () => {
  const [volumen, setVolumen] = useVolumeMusic();
  const volumenBar = useRef(null);
  const [mute, setMute] = useMutedMusic();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  return (
    <>
      <h3>{useTranslator(currentLanguage.name, "Sounds")}</h3>
      <h4>{useTranslator(currentLanguage.name, "Nature")}</h4>
      <SongByType type="Nature" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "Anime")}</h4>
      <SongByType type="Anime" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "Cafe")}</h4>
      <SongByType type="Cafe" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "Jazz")}</h4>
      <SongByType type="Jazz" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "Classical")}</h4>
      <SongByType type="Classical" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "Running")}</h4>
      <SongByType type="Running" volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, "India")}</h4>
      <SongByType type="India" volume={volumen} mute={mute} />
      <div className={classes.volumenStyle}>
        {mute ? (
          <span>
            {" "}
            <img
              className={classes.volumenIcon}
              src={muted}
              onClick={() => setMute(false)}
            ></img>
          </span>
        ) : (
          <span>
            {" "}
            <img
              className={classes.volumenIcon}
              src={volumeIcon}
              onClick={() => setMute(true)}
            ></img>
          </span>
        )}

        <input
          ref={volumenBar}
          type="range"
          min="0"
          max="100"
          value={volumen}
          onChange={() => setVolumen(volumenBar.current.value)}
        />
        <span>{volumen}</span>
      </div>
    </>
  );
};
