// Architecture & Global State Imports
import type { BackgroundSong } from "../../../../../store/slices/Sounds/SoundsSlice.ts";

export type SongUpdate = {
  [K in keyof BackgroundSong]: {
    attribute: K;
    value: BackgroundSong[K];
  };
}[keyof BackgroundSong];
