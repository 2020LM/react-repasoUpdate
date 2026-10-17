// Third-Party & Ecosystem Imports
import { useDispatch } from "react-redux";

// Architecture & Global State Imports
import { setBackground as setBackgroundAction } from "../../../../../store/slices/Background/BackgroundSlice.js";

// Internal Tools & Utilities
import storage from "../../../../../lib/storage.js";
import { isWideViewport } from "../../../../../lib/generalFunctions.js";

export const useBackgroundImageSelection = () => {
  const dispatch = useDispatch();

  // Persists both background variants and selects the one suited to the current viewport.
  const setBackgroundAndAlternativeImages = (
    value: string,
    alternativeValue: string,
    index: number
  ) => {
    storage.set("backgroundImage", value);
    storage.set("backgroundAlternativeImage", alternativeValue);
    storage.set("indexBackgroundImage", index);

    dispatch(
      setBackgroundAction(isWideViewport() ? value : alternativeValue)
    );
  };

  return { setBackgroundAndAlternativeImages };
};
