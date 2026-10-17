// Third-Party & Ecosystem Imports
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectCurrentSong,
  updateSong as updateSongAction,
  setCurrentSong as setCurrentSongAction,
} from "../../../../../store/slices/Sounds/SoundsSlice.ts";
import { RootState } from "../../../../../store/store.ts";

// Internal Tools & Utilities
import type { SongUpdate } from "../data/ObjectDescription.ts";

export const useBackgroundSoundHooks = (index: number) => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.sounds.songs[index]);
  const currentSongId = useSelector(
    (state: RootState) => selectCurrentSong(state).id
  );

  const isRepeating = item?.repeat === "true" || item?.repeat === true;
  const isPlaying =
    item !== undefined &&
    currentSongId === item.id &&
    item.currentTime < item.duration;

  // Updates the selected song's fields in the Redux store.
  const updateSong = (update: SongUpdate) => {
    dispatch(updateSongAction({ index, ...update }));
  };

  // Starts the selected song or stops it when it is already active.
  const handlePlayPause = () => {
    if (!item) return;

    if (currentSongId === item.id) {
      dispatch(setCurrentSongAction({}));
      return;
    }

    const hasFinished = item.currentTime >= item.duration;
    if (hasFinished) {
      updateSong({ attribute: "currentTime", value: 0 });
    }

    dispatch(
      setCurrentSongAction({
        ...item,
        currentTime: hasFinished ? 0 : item.currentTime,
      })
    );
  };

  return { item, isRepeating, isPlaying, updateSong, handlePlayPause };
};
