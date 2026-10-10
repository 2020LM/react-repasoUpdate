export const formatDuration = (durationSeconds) => {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = Math.floor(durationSeconds % 60);
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${formattedSeconds}`;
};

export const hourFormatToSeconds = (minutes, seconds) => {
  return minutes * 60 + seconds;
};

export const ConcatStringToNumber = (string1, string2) => {
  const isNumeric = (str) => str.match(/^[0-9]+$/) !== null;

  if (!isNumeric(string1) || !isNumeric(string2)) {
    throw new Error(
      "Cadenas de entrada no válidas. Ambas cadenas deben contener solo números."
    );
  }

  const concatenatedString = string1 + string2;
  const numberValue = parseInt(concatenatedString);

  return numberValue;
};
