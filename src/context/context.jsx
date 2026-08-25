// Third-Party & Ecosystem Imports
import React from "react";
import { createContext, useContext, useState } from "react";

// Architecture & Global State Imports
import { BackgroundMusic } from "../components/sideBar/SideBarOptions/BackgroundSounds/backgroundSoundsData";
import { LanguageData } from "../components/sideBar/SideBarOptions/languegueOptions/languageData";


// Internal Tools & Utilities
import contextLoader from "../lib/ContextLoader.js";

// Time

export const Seconds = createContext();
export const FixingTime = createContext();
export const TriggeredFixingTime = createContext();
export const SecondStart = createContext();
export const TimeSetByUser = createContext();


// Sounds

export const IsPlaying = createContext();
export const RepeatingArray = createContext();
export const CurrenTimingArray = createContext();
export const DurationAray = createContext();
export const Songs = createContext();
export const CurrentSong = createContext();
export const VolumeMusic = createContext();
export const MutedMusic = createContext();


// Languages

export const Languages = createContext();
export const CurrentLanguage = createContext();


// Time

export function useSeconds() {
  return useContext(Seconds);
}

export function useFixingTime() {
  return useContext(FixingTime);
}

export function useTriggeredFixingTime() {
  return useContext(TriggeredFixingTime);
}

export function useSecondStart() {
  return useContext(SecondStart);
}

export function useTimeSetByUser() {
  return useContext(TimeSetByUser);
}

// Sounds

export function useIsPlaying() {
  return useContext(IsPlaying);
}

export function useRepeatingArray() {
  return useContext(RepeatingArray);
}

export function useCurrenTimingArray() {
  return useContext(CurrenTimingArray);
}

export function useDurationAray() {
  return useContext(DurationAray);
}

export function useSongsData() {
  return useContext(Songs);
}

export function useCurrentSong() {
  return useContext(CurrentSong);
}

export const useVolumeMusic = () => {
  return useContext(VolumeMusic);
};

export const useMutedMusic = () => {
  return useContext(MutedMusic);
};

// Languages

export const useLanguage = () => {
  return useContext(Languages);
};

export const useCurrentLanguage = () => {
  return useContext(CurrentLanguage);
};



export const DataProvider = ({ children }) => {

// Time

const [initialSeconds, setInitialSeconds] = useState(
    contextLoader.loadLocalStorage("seconds", 1500)
  );
const [fixingTimer, setFixingTimer] = useState(false);
const [triggeredFixingTime, setTriggeredFixingTime] = useState(false);
const [secondsRestart, setSecondsRestart] = useState(initialSeconds);
const [timeSetByUser, setTimeSetByUser] = useState(false);

// Sounds

const [songs, useSongs] = useState(BackgroundMusic);
const [currentSong, setCurrentSong] = useState({});
const [volumeMusic, setVolumeMusic] = useState(
    contextLoader.loadLocalStorage("soundVolume", 50)
  );
const [mutedMusic, setMutedMusic] = useState(false);

// Languages

const [languages, setLanguages] = useState(LanguageData);
const [currentLanguage, setCurrentLanguage] = useState(
    contextLoader.loadLocalStorage("language", languages[0])
  );

  return (

      <Seconds.Provider value={[initialSeconds, setInitialSeconds]}>
        <FixingTime.Provider value={[fixingTimer, setFixingTimer]}>
          <SecondStart.Provider value={[secondsRestart, setSecondsRestart]}>
            <TimeSetByUser.Provider value={[timeSetByUser, setTimeSetByUser]}>
                <Songs.Provider value={[songs, useSongs]}>
                  <CurrentSong.Provider value={[currentSong, setCurrentSong]}>
                                <VolumeMusic.Provider
                                  value={[volumeMusic, setVolumeMusic]}
                                >
                                  <MutedMusic.Provider
                                    value={[mutedMusic, setMutedMusic]}
                                  >
                                    <Languages.Provider
                                      value={[languages, setLanguages]}
                                    >
                                      <CurrentLanguage.Provider
                                        value={[
                                          currentLanguage,
                                          setCurrentLanguage,
                                        ]}
                                      >
                                          <TriggeredFixingTime.Provider
                                            value={[
                                              triggeredFixingTime,
                                              setTriggeredFixingTime,
                                            ]}
                                          >
                                                {children}
                                          </TriggeredFixingTime.Provider>
                                      </CurrentLanguage.Provider>
                                    </Languages.Provider>
                                  </MutedMusic.Provider>
                                </VolumeMusic.Provider>
                  </CurrentSong.Provider>
                </Songs.Provider>
            </TimeSetByUser.Provider>
          </SecondStart.Provider>
        </FixingTime.Provider>
      </Seconds.Provider>
  );
};
