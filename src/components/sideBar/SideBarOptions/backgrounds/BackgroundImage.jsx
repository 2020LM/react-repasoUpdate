import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

import { useTranslator } from "../../../translator/translator";

import classes from "./backgrounds.module.css";

export const BackgroundImage = ({
  item,
  index,
  currentLanguage,
  type,
  onSelect,
  isWide,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageSrc = isWide ? item.src : item.src2;
  const altText =
    item.alt != undefined
      ? useTranslator(currentLanguage.name, item.alt)
      : useTranslator(currentLanguage.name, type);

  return (
    <div key={index} className={`${classes.fixxingMargins}`}>
      <div
        style={{
          display: !isLoaded ? "block" : "none",
        }}
      >
        <Blurhash width={68} height={60} hash={item.hash1} />
      </div>

      <div
        style={{
          display: isLoaded ? "block" : "none",
        }}
      >
        <span onClick={() => onSelect(item.src, item.src2, index)}>
          <img
            onLoad={() => setIsLoaded(true)}
            src={imageSrc}
            alt={altText}
          />
        </span>
      </div>
    </div>
  );
};

export default BackgroundImage;
