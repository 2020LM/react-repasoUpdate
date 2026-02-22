import { Fragment, useState, useRef, useEffect } from "react";
import classes from "./backgroundSounds.module.css";
import play from "../../../../assets/img/icons/icons8-play-50.webp";
import pause from "../../../../assets/img/icons/icons8-pausa-50.webp";
import repeatSound from "../../../../assets/img/icons/icons8-repeat-50_5_11zon_115_11zon.webp";
import notRepeatSound from "../../../../assets/img/icons/icons8-repeat-one-50.webp";
import {
  useSongsData,
  useCurrentSong,
  useMutedMusic,
} from "../../../../context/context";
import { formatDuration } from "../../../../generalFunctions/generalFunctions";

export const SongByType = (props) => {
  const createReferences = (array) => {
    return array.map((item) => useRef(null));
  };

  const [songs, setSongs] = useSongsData();
  const [currentSong, setCurrentSong] = useCurrentSong();
  const [mute, setMute] = useMutedMusic();

  const changeRepeat = (index, boolean) => {
    updateSong(index, "repeat", boolean);
    songs[index].audio.loop = StringtoBoolean(songs[index].repeat);
  };

  const checkRepeat = (index) => {
    if (songs[index].currenTime == songs[index].duration) {
      return true;
    }
    return false;
  };

  // Function to seek a specific time in the audio.
  const handleSeek = (index, event) => {
    if (event != undefined) {
      //updateSong(index,"currentTime",event.target.value)
      songs[index].audio.currentTime = event.target.value;
    }
  };

  // Function to update the current time and duration of the audio
  const handleTimeUpdate = (index) => {
    updateSong(index, "currentTime", songs[index].audio.currentTime);
  };

  // Function to handle playing the audio.
  const handlePlay = (index) => {
    //  updateSong(index,"isPlaying","true")

    setCurrentSong({
      ...currentSong,
      id: songs[index].id,
      //isPlaying: songs[index].isPlaying,
      song: songs[index].song,
      duration: songs[index].duration,
      type: songs[index].type,
      currentTime: songs[index].currentTime,
      repeat: songs[index].repeat,
      audio: songs[index].audio,
    });

    // references[index].current.play()
    songs[index].audio.play();
  };

  // Function to handle pausing the audio.
  const handlePuase = (index) => {
    // updateSong(index,"isPlaying","false")
    // references[index].current.pause()
    songs[index].audio.pause();
  };

  const StringtoBoolean = (string) => {
    if (string == "true") {
      return true;
    }
    return false;
  };

  // Function to toggle between play and pause state.
  const handlePlayPause = (index) => {
    if (
      currentSong.id - 1 == index &&
      songs[index].currentTime == songs[index].duration
    ) {
      updateSong(index, "currenTime", 0);
      // songs[index].audio.currentTime = 0
      handlePlay(index);
      return;
    }

    if (
      currentSong != {} &&
      songs[index].audio.paused &&
      currentSong.id - 1 == index
    ) {
      handlePlay(index);
      return;
    }

    if (currentSong.id - 1 != index) {
      if (!songs[index].audio.paused) {
        handlePuase(currentSong.id - 1);
      }

      if (Object.entries(currentSong).length !== 0) {
        if (!songs[currentSong.id - 1].audio.paused) {
          handlePuase(currentSong.id - 1);
        }
      }

      handlePlay(index);
      return;
    }

    if (!songs[index].audio.paused) {
      handlePuase(index);
      return;
    }

    handlePlay(index);
  };

  const updateSong = (index, atribute, value) => {
    const updatedSongs = [...songs];

    if (atribute == "id") {
      updatedSongs[index].id = value;
    } else if (atribute == "isPlaying") {
      updatedSongs[index].isPlaying = value;
    } else if (atribute == "repeat") {
      updatedSongs[index].repeat = value;
    } else if (atribute == "song") {
      updatedSongs[index].song = value;
    } else if (atribute == "duration") {
      updatedSongs[index].duration = value;
    } else if (atribute == "type") {
      updatedSongs[index].type = value;
    } else if (atribute == "currentTime") {
      updatedSongs[index].currentTime = value;
    }

    setSongs(updatedSongs);
  };

  const checkPlayPause = (index) => {
    if (index == currentSong.id - 1) {
      if (
        songs[index].audio.currentTime != songs[index].audio.duration &&
        !songs[index].audio.paused
      ) {
        return true;
      }

      return false;
    }
  };

  // Use an effect to Listen for "Timeupdate" events from the audio element and update the UI.
  useEffect(() => {
    songs.map((item, index) => {
      songs[index].audio.addEventListener("timeupdate", () =>
        handleTimeUpdate(index)
      );
      songs[index].audio.loop = StringtoBoolean(songs[index].repeat);
    });
  }, []);

  useEffect(() => {
    songs.map((item, index) => {
      songs[index].audio.volume = props.volume / 100;
    });
    localStorage.setItem("soundVolume", props.volume);
    if (props.volume == 0) {
      setMute(true);
      return;
    }
    setMute(false);
  }, [props.volume]);

  useEffect(() => {
    songs.map((item, index) => {
      songs[index].audio.muted = props.mute;
    });
  }, [props.mute]);

  return (
    <>
      <div className={`${classes.container}`}>
        <div className={`${classes.music}`}>
          {songs.map((item, index) => {
            if (item.type == props.type) {
              return (
                <div key={index} className={`${classes.audioOptions}`}>
                  {/* Play/Pause button with a dynamic icon*/}
                  <div
                    className={`bg-transparent m-0 p-0 ${classes.pausePlay}`}
                  >
                    <span className="material-symbols-rounded">
                      {checkPlayPause(index) ? (
                        <img
                          onClick={() => handlePlayPause(index)}
                          className={`${classes.soundsImg}`}
                          src={pause}
                        />
                      ) : (
                        <img
                          onClick={() => handlePlayPause(index)}
                          className={`${classes.soundsImg}`}
                          src={play}
                        />
                      )}
                    </span>
                  </div>

                  {/* Progress bar of the song */}

                  <div className={classes.inputDiv}>
                    <input
                      type="range"
                      min="0"
                      max={item.audio.duration}
                      value={item.audio.currentTime}
                      onChange={(event) => handleSeek(index, event)}
                    />
                  </div>

                  <div className={`${classes.aditionalOptions}`}>
                    {/* Repeating botton */}
                    <span>
                      {item.repeat == "true" ? (
                        <img
                          onClick={() => changeRepeat(index, "false")}
                          src={repeatSound}
                          className={`${classes.soundsImg}`}
                        />
                      ) : (
                        <img
                          className={`${classes.soundsImg}`}
                          onClick={() => changeRepeat(index, "true")}
                          src={notRepeatSound}
                        />
                      )}
                    </span>

                    {/* Display current and total duration of the track */}

                    <div className={`${classes.trackDuration}`}>
                      <div>
                        <p>
                          {formatDuration(
                            item.audio.duration - item.audio.currentTime
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
