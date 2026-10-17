// Internal Tools & Utilities
import { smallScreen } from "../../../General/generalVariables.ts";

const smallSize = 400;

// Returns the responsive class for the timer's button group.
export const getTraditionalButtonStyle = (
  viewportWidth: number,
  buttonBottomClass: string
) => (viewportWidth >= smallScreen ? "" : buttonBottomClass);

// Returns the responsive class that moves the timer display upward.
export const getFixingTimerStyle = (
  viewportWidth: number,
  fixingTimerUpClass: string
) =>
  viewportWidth >= smallSize && viewportWidth <= smallScreen
    ? fixingTimerUpClass
    : "";
