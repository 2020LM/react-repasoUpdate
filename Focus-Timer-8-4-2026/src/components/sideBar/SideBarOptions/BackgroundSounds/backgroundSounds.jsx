import React from "react";

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
import {
  NATURE,
  ANIME,
  CAFE,
  CLASSICAL,
  JAZZ,
  RUNNING,
  INDIA,
} from "../../../../General/generalVariables";

export const BackgroundSounds = () => {
  const [volumen, setVolumen] = useVolumeMusic();
  const volumenBar = useRef(null);
  const [mute, setMute] = useMutedMusic();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  return (
    <>
      <h3>{useTranslator(currentLanguage.name, "Sounds")}</h3>
      <h4>{useTranslator(currentLanguage.name, NATURE)}</h4>
      <SongByType type={NATURE} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, ANIME)}</h4>
      <SongByType type={ANIME} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, CAFE)}</h4>
      <SongByType type={CAFE} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, JAZZ)}</h4>
      <SongByType type={JAZZ} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, CLASSICAL)}</h4>
      <SongByType type={CLASSICAL} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, RUNNING)}</h4>
      <SongByType type={RUNNING} volume={volumen} mute={mute} />
      <h4>{useTranslator(currentLanguage.name, INDIA)}</h4>
      <SongByType type={INDIA} volume={volumen} mute={mute} />
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
