import classes from "./index.module.css";
import { MyTimer } from "../components/timer/timer";
import { HamburgerMenu } from "../components/bottons/hamburgerMenu";
import { SideBard } from "../components/sideBar/sideBar";
import {
  useBackground,
  useSeconds,
  useBackgroundImages,
} from "../context/context";
import { useEffect, Fragment, useRef } from "react";
import image from "../assets/img/backgrounds/Anime/3.png";
import alternativeImage from "../assets/img/backgrounds/Anime/3V.png";
import { Blurhash } from "react-blurhash";

//import { UseRefExcersise } from "../components/HooksExcersices/useRef/useRef";
function Main() {
  const newTime = (seconds) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer
    return time;
  };

  const loadLocalStorage = (nameItem, defaultValue) => {
    if (localStorage.getItem(nameItem)) {
      return JSON.parse(localStorage.getItem(nameItem));
    }

    return defaultValue;
  };

  const [background, setBackground] = useBackground();
  const [seconds, setSeconds] = useSeconds();
  const bigContainer = useRef(null);
  const [backgroundImages, setBackgroundImages] = useBackgroundImages();

  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${background})`;
    body.style.objectFit = "cover";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    if (window.innerWidth <= 992) {
      body.style.width = "107vw";
      body.style.height = "107.5vh";
    }

    // body.style.backgroundPosition = '-7vw center';
  }, [background]); // Run effect only when background changes

  // Function that handles the resizing of the screen.
  useEffect(() => {
    function handleResize() {
      if (
        window.innerWidth >= 525 &&
        window.innerWidth >= window.innerHeight * 1.05
      ) {
        // setBackground(background)
        if (localStorage.getItem("backgroundImage")) {
          setBackground(localStorage.getItem("backgroundImage"));
        } else {
          setBackground(image);
        }

        return;
      }
      if (localStorage.getItem("backgroundAlternativeImage")) {
        setBackground(localStorage.getItem("backgroundAlternativeImage"));
      } else {
        setBackground(alternativeImage);
      }
    }
    // Agregar evento de 'resize' a la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]); // Dependencia vacía para evitar bucles infinitos

  return (
    <>
      <main>
        <div ref={bigContainer} className={`${classes.content}`}>
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
