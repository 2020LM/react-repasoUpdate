// Third-Party & Ecosystem Imports
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Blurhash } from "react-blurhash";

// Architecture & Global State Imports
import { selectInitialSeconds } from "../store/slices/Time/TimeSlice.js";
import {
  selectBackground,
  selectIndexBackgroundImage,
  selectBackgroundImages,
  selectBackgroundLoaded
} from "../store/slices/Background/BackgroundSlice.js";
import { setBackground as setBackgroundAction,
         setBackgroundLoaded as setBackgroundLoadedAction
} from "../store/slices/Background/BackgroundSlice.js";


// Internal Tools & Utilities
import storage from "../lib/storage.js";
import DefaultImage from "../assets/img/backgrounds/Anime/3_5_11zon_253_11zon.webp";
import DefaultAlternativeImage from "../assets/img/backgrounds/Anime/3V_6_11zon_255_11zon.webp";

// Local Components
import { MyTimer } from "../components/timer/timer.js";
import { AlarmAudioManager } from "../components/audio/AlarmAudioManager/AlarmAudioManager.js";
import { BackgroundSoundManager } from "../components/audio/BackgroundSoundManager/BackgroundSoundManager.js";
import { HamburgerMenu } from "../components/bottons/hamburgerMenu.js";
import { SideBard } from "../components/sideBar/sideBar.js";

// Component Styles
import classes from "./index.module.css";

function Main() {
  const newTime = (seconds: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer
    return time;
  };


  const dispatch = useDispatch();

  // Background
  const background = useSelector(selectBackground);
  const indexBackgroundImage = useSelector(selectIndexBackgroundImage);
  const backgroundImages = useSelector(selectBackgroundImages);
  const backgroundLoaded = useSelector(selectBackgroundLoaded);

  const setBackground = (value: string) => {
    dispatch(setBackgroundAction(value));
  };

  const setBackgroundLoaded = (value: boolean) => {
    dispatch(setBackgroundLoadedAction(value));
  };

  const seconds = useSelector(selectInitialSeconds);
  const bigContainer = useRef(null);
  const [currentHash, setCurrentHash] = useState(
    backgroundImages[indexBackgroundImage].hash1
  );
  useEffect(() => {
    // To create a new background image.
    const img = new Image();
    img.src = background;
    const body = document.body;
    body.style.backgroundImage = `url(${background})`;
    body.style.objectFit = "cover";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    if (window.innerWidth <= 992) {
      body.style.width = "107vw";
      body.style.height = "107.5vh";
    }
    // Registrar el evento onload en caso de que no esté cargada aún.
    img.onload = () => {
      setBackgroundLoaded(true);
    };
  }, [background]); // Run effect only when background changes

  // Function that handles the resizing of the screen.
  useEffect(() => {
    function handleResize() {
      if (
        window.innerWidth >= 525 &&
        window.innerWidth >= window.innerHeight * 1.05
      ) {
        if (storage.get("backgroundImage")) {
          setBackground(storage.get("backgroundImage"));
        } else {
          setBackground(DefaultImage);
        }
        return;
      }

      if (storage.get("backgroundAlternativeImage")) {
        setBackground(storage.get("backgroundAlternativeImage"));
        setBackgroundLoaded(true);
      } else {
        setBackground(DefaultAlternativeImage);
      }
    }

    // To add the event 'resize' to the Window
    window.addEventListener("resize", handleResize);

    // To remove the element when the component unmounts.
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]); // Dependencia vacía para evitar bucles infinitos

  return (
    <>
      <main>
        <div ref={bigContainer} className={`${classes.content}`}>
          {
            <div
              className={`${classes.blurHash}`}
              style={{
                display: !backgroundLoaded ? "block" : "none",
              }}
            >
              <Blurhash width={"100%"} height={"100%"} hash={currentHash} />
            </div>
          }
          <AlarmAudioManager />
          <BackgroundSoundManager />
          <MyTimer expiryTimestamp={newTime(seconds)} />
          <aside>
            <HamburgerMenu />
            <SideBard />
          </aside>
        </div>
      </main>
    </>
  );
}

export default Main;
