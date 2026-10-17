// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";
import { Blurhash } from "react-blurhash";

// Architecture & Global State Imports
import { selectInitialSeconds } from "../../store/slices/Time/TimeSlice.ts";

// Local Components
import { Timer } from "../../components/timer/view/timer.tsx";
import { AlarmAudioManager } from "../../components/audio/AlarmAudioManager/view/AlarmAudioManager.tsx";
import { BackgroundSoundManager } from "../../components/audio/BackgroundSoundManager/view/BackgroundSoundManager.tsx";
import { HamburgerMenu } from "../../components/hamburgerMenu/view/hamburgerMenu.tsx";
import { SideBar } from "../../components/sideBar/view/sideBar.tsx";
import { usePageBackground } from "./usePageBackground.ts";

// Component Styles
import classes from "./index.module.css";

export const FocusTimerPage = () => {
  const newTime = (seconds: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer
    return time;
  };

  const { backgroundLoaded, currentHash } = usePageBackground();

  const seconds = useSelector(selectInitialSeconds);

  return (
    <>
      <main>
        <div className={`${classes.content}`}>
          {
            <div
              className={`${classes.blurHash}`}
              style={{
                display: !backgroundLoaded ? "block" : "none",
              }}
            >
              <Blurhash width={"100%"} height={"100%"} hash={currentHash} />
            </div>
          }
          <AlarmAudioManager />
          <BackgroundSoundManager />
          <Timer expiryTimestamp={newTime(seconds)} />
          <aside>
            <HamburgerMenu />
            <SideBar />
          </aside>
        </div>
      </main>
    </>
  );
}
