import React from "react";

import {
  useBackgroundImages,
  useBackground,
  useCurrentLanguage,
} from "../../../../context/context";
import { useEffect, useState, useRef } from "react";
import classes from "./backgrounds.module.css";
import { Blurhash } from "react-blurhash";
import { useTranslator } from "../../../translator/translator";

export const BackgroundByType = (props) => {
  const createReferences = (array) => {
    return array.map(() => useRef(null));
  };

  const [backgroundImages, setBackgroundImages] = useBackgroundImages();
  const [background, setBackground] = useBackground();
  const [references, setReferences] = useState(
    createReferences(backgroundImages)
  );

  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();
  const mediumSize = 525;

  const setBackgroundAndAlternativeImages = (
    value,
    alternativeValue,
    index
  ) => {
    localStorage.setItem("backgroundImage", JSON.stringify(value));
    localStorage.setItem(
      "backgroundAlternativeImage",
      JSON.stringify(alternativeValue)
    );
    localStorage.setItem("indexBackgroundImage", JSON.stringify(index));
    if (
      window.innerWidth >= mediumSize &&
      window.innerWidth >= window.innerHeight * 1.05
    ) {
      setBackground(value);
    } else {
      setBackground(alternativeValue);
    }
  };

  const updateBackgroundImages = (index, item, value) => {
    const updatedBackgroundImages = [...backgroundImages];

    if (item == "image") {
      updatedBackgroundImages[index].image = value;
    } else if (item == "src") {
      updatedBackgroundImages[index].src = value;
    } else if (item == "src2") {
      updatedBackgroundImages[index].src2 = value;
    } else if (item == "isLoaded") {
      updatedBackgroundImages[index].isLoaded = value;
    } else if (item == "type") {
      updatedBackgroundImages[index].type = value;
    }
    setBackgroundImages(updatedBackgroundImages);
  };

  useEffect(() => {
    references.map((item, index) => {
      if (item.current != null) {
        item.current.onLoad = () => {
          updateBackgroundImages(index, "isLoaded", true);
        };
      }
    });
  }, []);

  return (
    <>
      <div className={`${classes.container}  m-4`}>
        {window.innerWidth >= mediumSize &&
          window.innerWidth >= window.innerHeight * 1.05 &&
          backgroundImages.map((item, index) => {
            if (item.type == props.type) {
              return (
                <div key={index} className={`${classes.fixxingMargins}`}>
                  <div
                    style={{
                      display: !backgroundImages[index].isLoaded
                        ? "block"
                        : "none",
                    }}
                  >
                    <Blurhash
                      width={68}
                      height={60}
                      hash={backgroundImages[index].hash1}
                    />
                  </div>

                  <div
                    style={{
                      display: backgroundImages[index].isLoaded
                        ? "block"
                        : "none",
                    }}
                  >
                    <span
                      onClick={() =>
                        setBackgroundAndAlternativeImages(
                          item.src,
                          item.src2,
                          index
                        )
                      }
                    >
                      <img
                        onLoad={() =>
                          updateBackgroundImages(index, "isLoaded", true)
                        }
                        ref={references[index]}
                        src={item.src}
                        alt={
                          item.alt != undefined
                            ? useTranslator(currentLanguage.name, item.alt)
                            : useTranslator(currentLanguage.name, props.type)
                        }
                      />
                    </span>
                  </div>
                </div>
              );
            }
          })}

        {(window.innerWidth <= mediumSize ||
          window.innerWidth <= window.innerHeight * 1.05) &&
          backgroundImages.map((item, index) => {
            if (item.type == props.type) {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: !backgroundImages[index].isLoaded
                        ? "block"
                        : "none",
                    }}
                  >
                    <Blurhash
                      width={68}
                      height={60}
                      hash={backgroundImages[index].hash1}
                    />
                  </div>

                  <div
                    style={{
                      display: backgroundImages[index].isLoaded
                        ? "block"
                        : "none",
                    }}
                  >
                    <span
                      onClick={() =>
                        setBackgroundAndAlternativeImages(
                          item.src,
                          item.src2,
                          index
                        )
                      }
                    >
                      <img
                        onLoad={() =>
                          updateBackgroundImages(index, "isLoaded", true)
                        }
                        ref={references[index]}
                        src={item.src2}
                        alt={
                          item.alt != undefined
                            ? useTranslator(currentLanguage.name, item.alt)
                            : useTranslator(currentLanguage.name, props.type)
                        }
                      />
                    </span>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};
