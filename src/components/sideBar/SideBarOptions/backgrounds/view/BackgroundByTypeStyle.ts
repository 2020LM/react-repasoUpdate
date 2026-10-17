import { useEffect, useState } from "react";

import { isWideViewport } from "../../../../../lib/generalFunctions.js";

export const useBackgroundByTypeStyle = () => {
  const [isWide, setIsWide] = useState(isWideViewport);

  // Keeps the background preview layout in sync with the viewport size.
  useEffect(() => {
    const updateLayout = () => setIsWide(isWideViewport());

    window.addEventListener("resize", updateLayout);
    updateLayout();

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return { isWide };
};
