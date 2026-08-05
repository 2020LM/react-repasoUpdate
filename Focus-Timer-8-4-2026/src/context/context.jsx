import React from "react";

import { createContext, useState, useContext, useRef } from "react";
import image from "../assets/img/backgrounds/Anime/3_5_11zon_253_11zon.webp";
import image2 from "../assets/img/backgrounds/Anime/3V_6_11zon_255_11zon.webp";
import { BackgroundMusic } from "../components/sideBar/SideBarOptions/BackgroundSounds/backgroundSoundsData";
import { AlarmSoundData } from "../components/sideBar/SideBarOptions/alarmSounds/alarmSoundData";
import { LanguageData } from "../components/sideBar/SideBarOptions/languegueOptions/languageData";
import { BackgroundImages } from "../components/sideBar/SideBarOptions/backgrounds/backgroundData";

export const MyContext = createContext();

export const Seconds = createContext();

export const FixingTime = createContext();

export const TriggeredFixingTime = createContext();

export const SecondStart = createContext();

export const TimeSetByUser = createContext();

export const SideBar = createContext();

export const IsPlaying = createContext();

export const RepeatingArray = createContext();

export const CurrenTimingArray = createContext();

export const DurationAray = createContext();

export const Songs = createContext();

export const CurrentSong = createContext();

export const References = createContext();

export const RightArrow = createContext();

export const AlarmsSounds = createContext();

export const CurrentAlarm = createContext();

export const AlarmVolume = createContext();

export const MutedAlarm = createContext();

export const VolumeMusic = createContext();

export const MutedMusic = createContext();

export const Languages = createContext();

export const CurrentLanguage = createContext();

export const IndexBackgroundImage = createContext();

export const BackgroundImagesContext = createContext();

export const BackgroundLoadedContext = createContext();

export function useBackground() {
  return useContext(MyContext);
}

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

export function useVisibleSideBar() {
  return useContext(SideBar);
}

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

export function useReferences() {
  return useContext(References);
}

const initializeAudioRef = (array) => {
  return array.map((item) => useRef(null));
};

export const useRightArrow = () => {
  return useContext(RightArrow);
};

export const useAlarmSounds = () => {
  return useContext(AlarmsSounds);
};

export const useCurrentAlarm = () => {
  return useContext(CurrentAlarm);
};

export const useAlarmVolume = () => {
  return useContext(AlarmVolume);
};

export const useMutedAlarm = () => {
  return useContext(MutedAlarm);
};

export const useVolumeMusic = () => {
  return useContext(VolumeMusic);
};

export const useMutedMusic = () => {
  return useContext(MutedMusic);
};

export const useLanguage = () => {
  return useContext(Languages);
};

export const useCurrentLanguage = () => {
  return useContext(CurrentLanguage);
};

export const useIndexBackgroundImage = () => {
  return useContext(IndexBackgroundImage);
};

export const useBackgroundImages = () => {
  return useContext(BackgroundImagesContext);
};

export const useBackgroundLoaded = () => {
  return useContext(BackgroundLoadedContext);
};

// To load something from LocalStorage
const loadLocalStorage = (nameItem, defaultValue) => {
  if (localStorage.getItem(nameItem)) {
    return JSON.parse(localStorage.getItem(nameItem));
  }

  return defaultValue;
};

/* loadAndFix function loads something from the localStorage 
and configure one feature before of initializing the variable
*/

const loadAndFix = (nameItem, defaultValue, feature, value, arrayAudio) => {
  let object = loadLocalStorage(nameItem, defaultValue);
  if (feature == "volume") {
    arrayAudio[object].audio.volume = value;
    return arrayAudio[object];
  }
  return object;
};

const selectImage = (img1, img2) => {
  if (
    window.innerWidth >= 525 &&
    window.innerWidth >= window.innerHeight * 1.05
  ) {
    return img1;
  }
  return img2;
};

const selectLoadLocalStogare = (mainLoalStorage, alternativaLocalStorage) => {
  if (
    window.innerWidth >= 525 &&
    window.innerWidth >= window.innerHeight * 1.05
  ) {
    return mainLoalStorage;
  }

  return alternativaLocalStorage;
};

export const DataProvider = ({ children }) => {
  const [background, setBackground] = useState(
    loadLocalStorage(
      selectLoadLocalStogare("backgroundImage", "backgroundAlternativeImage"),
      selectImage(image, image2)
    )
  );
  const [initialSeconds, setInitialSeconds] = useState(
    loadLocalStorage("seconds", 1500)
  );
  const [fixingTimer, setFixingTimer] = useState(false);
  const [triggeredFixingTime, setTriggeredFixingTime] = useState(false);
  const [secondsRestart, setSecondsRestart] = useState(initialSeconds);
  const [timeSetByUser, setTimeSetByUser] = useState(false);
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [songs, useSongs] = useState(BackgroundMusic);
  const [currentSong, setCurrentSong] = useState({});
  const [references, setReferences] = useState(initializeAudioRef(songs));
  const [rightArrow, setRightArrow] = useState(true);
  const [alarmSounds, setAlarmSounds] = useState(AlarmSoundData);
  const [alarmVolume, setAlarmVolume] = useState(
    loadLocalStorage("alarmVolume", 50)
  );
  const [currentAlarm, setCurrentAlarm] = useState(
    loadAndFix("currentAlarm", 0, "volume", alarmVolume / 100, alarmSounds)
  );
  const [mutedAlarm, setMutedAlarm] = useState(false);
  const [volumeMusic, setVolumeMusic] = useState(
    loadLocalStorage("soundVolume", 50)
  );
  const [mutedMusic, setMutedMusic] = useState(false);
  const [languages, setLanguages] = useState(LanguageData);
  const [currentLanguage, setCurrentLanguage] = useState(
    loadLocalStorage("language", languages[0])
  );
  const [indexBackgroundImage, setIndexBackgroundImage] = useState(
    loadLocalStorage("indexBackgroundImage", 9)
  );
  const [backgroundImages, setBackgroundImages] = useState(BackgroundImages);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  return (
    <MyContext.Provider value={[background, setBackground]}>
      <Seconds.Provider value={[initialSeconds, setInitialSeconds]}>
        <FixingTime.Provider value={[fixingTimer, setFixingTimer]}>
          <SecondStart.Provider value={[secondsRestart, setSecondsRestart]}>
            <TimeSetByUser.Provider value={[timeSetByUser, setTimeSetByUser]}>
              <SideBar.Provider value={[visibleSideBar, setVisibleSideBar]}>
                <Songs.Provider value={[songs, useSongs]}>
                  <CurrentSong.Provider value={[currentSong, setCurrentSong]}>
                    <References.Provider value={[references, setReferences]}>
                      <RightArrow.Provider value={[rightArrow, setRightArrow]}>
                        <AlarmsSounds.Provider
                          value={[alarmSounds, setAlarmSounds]}
                        >
                          <CurrentAlarm.Provider
                            value={[currentAlarm, setCurrentAlarm]}
                          >
                            <AlarmVolume.Provider
                              value={[alarmVolume, setAlarmVolume]}
                            >
                              <MutedAlarm.Provider
                                value={[mutedAlarm, setMutedAlarm]}
                              >
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
                                        <IndexBackgroundImage.Provider
                                          value={[
                                            indexBackgroundImage,
                                            setIndexBackgroundImage,
                                          ]}
                                        >
                                          <TriggeredFixingTime.Provider
                                            value={[
                                              triggeredFixingTime,
                                              setTriggeredFixingTime,
                                            ]}
                                          >
                                            <BackgroundImagesContext.Provider
                                              value={[
                                                backgroundImages,
                                                setBackgroundImages,
                                              ]}
                                            >
                                              <BackgroundLoadedContext.Provider
                                                value={[
                                                  backgroundLoaded,
                                                  setBackgroundLoaded,
                                                ]}
                                              >
                                                {children}
                                              </BackgroundLoadedContext.Provider>
                                            </BackgroundImagesContext.Provider>
                                          </TriggeredFixingTime.Provider>
                                        </IndexBackgroundImage.Provider>
                                      </CurrentLanguage.Provider>
                                    </Languages.Provider>
                                  </MutedMusic.Provider>
                                </VolumeMusic.Provider>
                              </MutedAlarm.Provider>
                            </AlarmVolume.Provider>
                          </CurrentAlarm.Provider>
                        </AlarmsSounds.Provider>
                      </RightArrow.Provider>
                    </References.Provider>
                  </CurrentSong.Provider>
                </Songs.Provider>
              </SideBar.Provider>
            </TimeSetByUser.Provider>
          </SecondStart.Provider>
        </FixingTime.Provider>
      </Seconds.Provider>
    </MyContext.Provider>
  );
};
