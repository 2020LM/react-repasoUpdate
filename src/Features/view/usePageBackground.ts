// Third-Party & Ecosystem Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectBackground,
  selectIndexBackgroundImage,
  selectBackgroundImages,
  selectBackgroundLoaded,
  setBackground as setBackgroundAction,
  setBackgroundLoaded as setBackgroundLoadedAction,
} from "../../store/slices/Background/BackgroundSlice.ts";

// Internal Tools & Utilities
import { isWideViewport } from "../../lib/generalFunctions.ts";
import storage from "../../lib/storage.ts";
import DefaultImage from "../../assets/img/backgrounds/Anime/3_5_11zon_253_11zon.webp";
import DefaultAlternativeImage from "../../assets/img/backgrounds/Anime/3V_6_11zon_255_11zon.webp";
import { bigScreen } from "../../General/generalVariables.ts";

export const usePageBackground = () => {
  const dispatch = useDispatch();
  const background = useSelector(selectBackground);
  const indexBackgroundImage = useSelector(selectIndexBackgroundImage);
  const backgroundImages = useSelector(selectBackgroundImages);
  const backgroundLoaded = useSelector(selectBackgroundLoaded);

  // Applies the selected background image and tracks when it finishes loading.
  useEffect(() => {
    const image = new Image();
    const body = document.body;

    const handleImageLoad = () => {
      dispatch(setBackgroundLoadedAction(true));
    };

    dispatch(setBackgroundLoadedAction(false));
    image.onload = handleImageLoad;
    image.src = background;
    body.style.backgroundImage = `url(${background})`;
    body.style.objectFit = "cover";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";

    return () => {
      image.onload = null;
    };
  }, [background, dispatch]);

  // Selects the appropriate background and body dimensions when the viewport changes.
  useEffect(() => {
    const handleResize = () => {
      const isWide = isWideViewport();
      const storedBackground = storage.get<string | undefined>("backgroundImage");
      const storedAlternativeBackground = storage.get<string | undefined>(
        "backgroundAlternativeImage"
      );

      dispatch(
        setBackgroundAction(
          isWide
            ? storedBackground || DefaultImage
            : storedAlternativeBackground || DefaultAlternativeImage
        )
      );

      const body = document.body;
      if (window.innerWidth <= bigScreen) {
        body.style.width = "107vw";
        body.style.height = "107.5vh";
      } else {
        body.style.width = "";
        body.style.height = "";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const currentHash = backgroundImages[indexBackgroundImage]?.hash1 ?? "";

  return { backgroundLoaded, currentHash };
};
