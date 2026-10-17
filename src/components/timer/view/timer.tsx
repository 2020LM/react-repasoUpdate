// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import type { TimerProps } from "../data/ObjectDescription.ts";
import { translator } from "../../translator/translator.ts";

// Local Components
import { useTimerManager } from "../hooks/useTimerManager.ts";
import { TimerFixer } from "../../TimerFixer/view/TimerFixer.tsx";

// Component Styles
import classes from "./timer.module.css";

// Renders the timer display and its controls using the timer manager state.
export const Timer = ({ expiryTimestamp }: TimerProps) => {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const {
    totalSeconds,
    seconds,
    isRunning,
    pause,
    resume,
    restartTimer,
    timeFormat,
    setFixingTimer,
    traditionalButton,
    fixingTimer,
    showResponsiveBreak,
  } = useTimerManager(expiryTimestamp);

  return (
    <div className={classes.main}>
      <div className={fixingTimer}>
        <h1>{translator(currentLanguage.name, "Focus Timer")}</h1>
        <div className={classes.timer}>
          <span aria-label="minutes">{timeFormat()}</span>:
          <span aria-label="seconds">
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
      </div>
      <br />
      {showResponsiveBreak && <br />}

      {totalSeconds === 0 && (
        <h2 className={`${(classes.colorfont, classes.done)}`}>
          {translator(currentLanguage.name, "Done!")}
        </h2>
      )}
      <div className={`${classes.buttons} ${traditionalButton}`}>
        <button
          type="button"
          onClick={() => setFixingTimer(true)}
          className="btn btn-outline-light"
        >
          {translator(currentLanguage.name, "Set Time")}
        </button>
        {totalSeconds > 0 && (
          <div>
            {!isRunning && (
              <button
                onClick={resume}
                type="button"
                className="btn btn-outline-light"
              >
                {translator(currentLanguage.name, "Start Timer")}
              </button>
            )}
            {isRunning && (
              <button
                onClick={pause}
                type="button"
                className="btn btn-outline-light"
              >
                {translator(currentLanguage.name, "Pause Timer")}
              </button>
            )}
          </div>
        )}
        <button
          onClick={restartTimer}
          type="button"
          className="btn btn-outline-light"
        >
          {translator(currentLanguage.name, "Restart Timer")}
        </button>
        <TimerFixer />
      </div>
    </div>
  );
};
