import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

import { translator } from "../../../translator/translator.js";

import classes from "./backgrounds.module.css";

type BackgroundItem = {
  src: string;
  src2: string;
  hash1: string;
  alt?: string;
};

type BackgroundImageProps = {
  item: BackgroundItem;
  index: number;
  currentLanguage: { name: string };
  type: string;
  onSelect: (value: string, alternativeValue: string, index: number) => void;
  isWide: boolean;
};

export const BackgroundImage = ({
  item,
  index,
  currentLanguage,
  type,
  onSelect,
  isWide,
}: BackgroundImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageSrc = isWide ? item.src : item.src2;
  const altText =
    item.alt != undefined
      ? translator(currentLanguage.name, item.alt)
      : translator(currentLanguage.name, type);

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
