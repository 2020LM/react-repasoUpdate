import type { ButtonHTMLAttributes } from "react";

import classes from "./mainMenu.module.css";

// Builds the accessibility, carousel, and styling props for a menu slide button.
export const carouselItemProps = (
  slide: number,
  label: string,
  onSelect: () => void
): ButtonHTMLAttributes<HTMLButtonElement> & {
  "data-bs-target": string;
  "data-bs-slide-to": string;
} => ({
  type: "button",
  "aria-label": label,
  "data-bs-target": "#carouselExampleControls",
  "data-bs-slide-to": String(slide),
  className: classes.menuOptionButton,
  onClick: onSelect,
});
