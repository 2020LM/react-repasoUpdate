import React from "react";

import classes from "./index.module.css";
import { MyTimer } from "../components/timer/timer";
import { HamburgerMenu } from "../components/bottons/hamburgerMenu";
import { SideBard } from "../components/sideBar/sideBar";
import {
  useBackground,
  useSeconds,
  useBackgroundImages,
  useIndexBackgroundImage,
  useBackgroundLoaded,
} from "../context/context";
import { useEffect, useState, useRef } from "react";
import image from "../assets/img/backgrounds/Anime/3_5_11zon_253_11zon.webp";
import alternativeImage from "../assets/img/backgrounds/Anime/3V_6_11zon_255_11zon.webp";
import { Blurhash } from "react-blurhash";

//import { UseRefExcersise } from "../components/HooksExcersices/useRef/useRef";
function Main() {
  const newTime = (seconds) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer
    return time;
  };

  const [newImage, setNewImage] = useState(image);
  const [background, setBackground] = useBackground();
  const [seconds, setSeconds] = useSeconds();
  const bigContainer = useRef(null);
  const [backgroundImages, setBackgroundImages] = useBackgroundImages();
  const [backgroundLoaded, setBackgroundLoaded] = useBackgroundLoaded();
  const [indexBackgroundImage, setIndexBackgroundImage] =
    useIndexBackgroundImage();
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
        if (localStorage.getItem("backgroundImage")) {
          setBackground(localStorage.getItem("backgroundImage"));
        } else {
          setBackground(image);
        }
        return;
      }

      if (localStorage.getItem("backgroundAlternativeImage")) {
        setBackground(localStorage.getItem("backgroundAlternativeImage"));
        setBackgroundLoaded(true);
      } else {
        setBackground(alternativeImage);
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
