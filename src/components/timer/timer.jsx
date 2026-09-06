// Third-Party & Ecosystem Imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useTimer } from "react-timer-hook";

// Architecture & Global State Imports
import {
  selectInitialSeconds,
  selectSecondsRestart,
  selectTriggeredFixingTime,
} from "../../store/slices/Time/TimeSlice.js";
import {
  setFixingTimer as setFixingTimerAction,
  setTimerValues as setTimerValuesAction,
} from "../../store/slices/Time/TimeSlice.js";
import { selectCurrentLanguage } from "../../store/slices/Languages/LanguageSlice.js";
import { ButtonModal } from "../ButtonModal/ButtonModal";
import { translator } from "../translator/translator";

// Component Styles
import classes from "./timer.module.css";

const bigSize = 992;
const mediumSize = 525;
const smallSize = 400;

export const MyTimer = ({ expiryTimestamp }) => {
  const styleButtons = () => {
    if (window.innerWidth >= mediumSize) {
      return "";
    }
    return `${classes.buttonBotton}`;
  };

  const styleFixxingButtons = () => {
    if (window.innerWidth >= smallSize && window.innerWidth <= mediumSize) {
      return `${classes.fixxingTimerUp}`;
    }
    return "";
  };


  const initialSeconds = useSelector(selectInitialSeconds);
  const secondsRestart = useSelector(selectSecondsRestart);
  const triggeredFixingTime = useSelector(selectTriggeredFixingTime);
  const currentLanguage = useSelector(selectCurrentLanguage);

  const dispatch = useDispatch();
  const setFixingTimer = (value) => dispatch(setFixingTimerAction(value));
  const setTimerValues = (value) => dispatch(setTimerValuesAction(value));

  const [traditionalButton, setTraditionalButton] = useState(styleButtons());
  const [fixxingTimer, setFixxingTimer] = useState(styleFixxingButtons());

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    setTimerValues({ totalSeconds, seconds, minutes });
  }, [totalSeconds, seconds, minutes]);

  const reestartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + initialSeconds);
    restart(time);
    pause(time);
    document.title =
      "Focus Timer | Boost Concentration & Productivity with Custom Intervals";
  };

  const timeFormat = () => {
    if (totalSeconds >= 3600) {
      return minutes + hours * 60;
    } else if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + secondsRestart);
    restart(time);
    pause(time);
    document.title =
      "Focus Timer | Boost Concentration & Productivity with Custom Intervals";
  }, [triggeredFixingTime]);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setTraditionalButton(styleButtons());
    });

    window.addEventListener("resize", function () {
      setFixxingTimer(styleFixxingButtons());
    });
  }, [window.innerWidth]);

  useEffect(() => {
    if (isRunning) {
      document.title =
        timeFormat() +
        ":" +
        (seconds < 10 ? `0${seconds}` : seconds) +
        "  Focus Timer | Boost Concentration & Productivity with Custom Intervals";
    }

    if (totalSeconds == 0 && minutes == 0 && seconds == 0) {
      document.title =
        "Focus Timer | Boost Concentration & Productivity with Custom Intervals";
    }
  }, [totalSeconds]);

  useEffect(() => {
    reestartTimer();
  }, []);

  return (
    <div className={`${classes.main}`}>
      <div className={`${fixxingTimer}`}>
        <h1>{translator(currentLanguage.name, "Focus Timer")}</h1>
        <div className={`${classes.timer}`}>
          <span>{timeFormat()}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      </div>
      {window.innerWidth <= mediumSize && <br />}

      {totalSeconds == 0 && (
        <h2 className={`${(classes.colorfont, classes.done)}`}>
          {translator(currentLanguage.name, "Done!")}
        </h2>
      )}
      <div className={`${classes.buttons} ${traditionalButton}`}>
        <button
          type="button"
          onClick={() => setFixingTimer(true)}
          className={"btn btn-outline-light"}
        >
          {translator(currentLanguage.name, "Set Time")}
        </button>
        {totalSeconds > 0 && (
          <div>
            {!isRunning && (
              <button
                onClick={resume}
                type="button"
                className={"btn btn-outline-light"}
              >
                {translator(currentLanguage.name, "Start Timer")}
              </button>
            )}
            {isRunning && (
              <button
                onClick={pause}
                type="button"
                className={"btn btn-outline-light"}
              >
                {translator(currentLanguage.name, "Pause Timer")}
              </button>
            )}
          </div>
        )}
        <button
          onClick={() => {
            reestartTimer();
          }}
          type="button"
          className={"btn btn-outline-light"}
        >
          {translator(currentLanguage.name, "Restart Timer")}
        </button>
        <ButtonModal />
      </div>
    </div>
  );
};
