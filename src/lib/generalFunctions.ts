// Internal Tools & Utilities
import { heightFixxr, smallScreen } from "../General/generalVariables.ts";

/** Checks whether the viewport meets the width and landscape orientation criteria. */
export const isWideViewport = () =>
  typeof window !== "undefined" &&
  window.innerWidth >= smallScreen &&
  window.innerWidth >= window.innerHeight * heightFixxr;

/** Converts a duration in seconds to the minutes:seconds format. */
export const formatDuration = (durationSeconds: number) => {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = Math.floor(durationSeconds % 60);
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${formattedSeconds}`;
};

/** Converts minutes and seconds into a total duration in seconds. */
export const hourFormatToSeconds = (minutes: number, seconds: number) => {
  return minutes * 60 + seconds;
};

/** Concatenates two numeric strings and returns the result as a number. */
export const ConcatStringToNumber = (string1: string, string2: string) => {
  const isNumeric = (str: string) => str.match(/^[0-9]+$/) !== null;

  if (!isNumeric(string1) || !isNumeric(string2)) {
    throw new Error(
      "Unexpected input. Both string only can contain numbers."
    );
  }

  const concatenatedString = string1 + string2;
  const numberValue = parseInt(concatenatedString);

  return numberValue;
};
