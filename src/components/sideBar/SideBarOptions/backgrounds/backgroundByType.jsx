
// Third-Party & Ecosystem Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import { setBackground as setBackgroundAction } from "../../../../store/slices/Background/BackgroundSlice.js";
import { selectBackgroundImagesByType } from "../../../../store/slices/Background/BackgroundSlice.js";
import { selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";

// Internal Tools & Utilities
import storage from "../../../../lib/storage";

// Local Components
import BackgroundImage from "./BackgroundImage";

// Component Styles
import classes from "./backgrounds.module.css";

export const BackgroundByType = (props) => {
  const dispatch = useDispatch();

  const backgroundImages = useSelector((state) =>
    selectBackgroundImagesByType(state, props.type)
  );

  const setBackground = (value) => {
    dispatch(setBackgroundAction(value));
  };

  const currentLanguage = useSelector(selectCurrentLanguage);
  const mediumSize = 525;

  const setBackgroundAndAlternativeImages = (value, alternativeValue, index) => {
    storage.set("backgroundImage", value);
    storage.set("backgroundAlternativeImage", alternativeValue);
    storage.set("indexBackgroundImage", index);

    if (
      window.innerWidth >= mediumSize &&
      window.innerWidth >= window.innerHeight * 1.05
    ) {
      setBackground(value);
    } else {
      setBackground(alternativeValue);
    }
  };

  const isWideLayout =
    window.innerWidth >= mediumSize &&
    window.innerWidth >= window.innerHeight * 1.05;

  return (
    <div className={`${classes.container}  m-4`}>
      {backgroundImages.map((item, index) => {
        if (item.type !== props.type) return null;

        return (
          <BackgroundImage
            key={`${item.type}-${index}`}
            item={item}
            index={index}
            currentLanguage={currentLanguage}
            type={props.type}
            isWide={isWideLayout}
            onSelect={setBackgroundAndAlternativeImages}
          />
        );
      })}
    </div>
  );
};
