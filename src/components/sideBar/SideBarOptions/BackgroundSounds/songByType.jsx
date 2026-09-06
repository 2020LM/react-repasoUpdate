
// Third-Party & Ecosystem Imports
import React from "react";

// Architecture & Global State Imports

import { BackgroundMusic } from "./backgroundSoundsData.js";

import BackgroundSound from "./BackgroundSound";
import classes from "./backgroundSounds.module.css";

export const SongByType = (props) => {
  const songs = BackgroundMusic.filter((item) => item.type === props.type);

  return (
    <>
      <div className={`${classes.container}`}>
        <div className={`${classes.music}`}>
          {songs.map((item) => {
            const index = BackgroundMusic.indexOf(item);
            return <BackgroundSound key={item.id} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
