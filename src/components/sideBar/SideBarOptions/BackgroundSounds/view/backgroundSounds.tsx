// Third-Party & Ecosystem Imports
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import { translator } from "../../../../translator/translator.ts";
import {
  NATURE,
  ANIME,
  CAFE,
  CLASSICAL,
  JAZZ,
  RUNNING,
  INDIA,
} from "../../../../../General/generalVariables.ts";

// Local Components
import { SongByType } from "./songByType.tsx";
import { BackgroundSoundConfiguration } from "../BackgroundSoundConfiguration/BackgroundSoundConfiguration.tsx";

export const BackgroundSounds = () => {

  const currentLanguage = useSelector(selectCurrentLanguage);

  return (
    <>
      <h3>{translator(currentLanguage.name, "Sounds")}</h3>
      <h4>{translator(currentLanguage.name, NATURE)}</h4>
      <SongByType type={NATURE} />
      <h4>{translator(currentLanguage.name, ANIME)}</h4>
      <SongByType type={ANIME} />
      <h4>{translator(currentLanguage.name, CAFE)}</h4>
      <SongByType type={CAFE} />
      <h4>{translator(currentLanguage.name, JAZZ)}</h4>
      <SongByType type={JAZZ} />
      <h4>{translator(currentLanguage.name, CLASSICAL)}</h4>
      <SongByType type={CLASSICAL} />
      <h4>{translator(currentLanguage.name, RUNNING)}</h4>
      <SongByType type={RUNNING} />
      <h4>{translator(currentLanguage.name, INDIA)}</h4>
      <SongByType type={INDIA} />
      <BackgroundSoundConfiguration />
    </>
  );
};
