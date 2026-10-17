// Third-Party & Ecosystem Imports
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";

// Architecture & Global State Imports
import {
  selectInitialSeconds,
  selectSecondsRestart,
  selectTriggeredFixingTime,
  setFixingTimer as setFixingTimerAction,
  setTimerValues as setTimerValuesAction,
} from "../../../store/slices/Time/TimeSlice.ts";

// Internal Tools & Utilities
import { smallScreen } from "../../../General/generalVariables.ts";
import type { TimerValues } from "../data/ObjectDescription.ts";
import {
  getFixingTimerStyle,
  getTraditionalButtonStyle,
} from "../view/timerStyles.ts";

// Component Styles
import classes from "../view/timer.module.css";

const defaultDocumentTitle =
  "Focus Timer | Boost Concentration & Productivity with Custom Intervals";

// Formats the timer's minute value, including elapsed hours.
const formatTimerMinutes = (
  totalSeconds: number,
  minutes: number,
  hours: number
) => {
  if (totalSeconds >= 3600) {
    return minutes + hours * 60;
  } else if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};

// Coordinates timer state, responsive styles, and document title updates.
export const useTimerManager = (expiryTimestamp: Date) => {
  const dispatch = useDispatch();
  const initialSeconds = useSelector(selectInitialSeconds);
  const secondsRestart = useSelector(selectSecondsRestart);
  const triggeredFixingTime = useSelector(selectTriggeredFixingTime);
  const initialSecondsRef = useRef(initialSeconds);

  const [viewportWidth, setViewportWidth] = useState(
    () => (typeof window === "undefined" ? 0 : window.innerWidth)
  );
  const [traditionalButton, setTraditionalButton] = useState(() =>
    getTraditionalButtonStyle(
      typeof window === "undefined" ? 0 : window.innerWidth,
      classes.buttonBotton
    )
  );
  const [fixingTimer, setFixingTimerClass] = useState(() =>
    getFixingTimerStyle(
      typeof window === "undefined" ? 0 : window.innerWidth,
      classes.fixingTimerUp
    )
  );

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
  const restartRef = useRef(restart);
  const pauseRef = useRef(pause);
  restartRef.current = restart;
  pauseRef.current = pause;

  // Opens or closes the timer configuration modal through Redux.
  const setFixingTimer = (value: boolean) =>
    dispatch(setFixingTimerAction(value));

  // Restarts the timer using the configured initial duration.
  const restartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + initialSeconds);
    restartRef.current(time);
    pauseRef.current();
    document.title = defaultDocumentTitle;
  };

  // Returns the formatted minute portion displayed by the timer.
  const timeFormat = () => formatTimerMinutes(totalSeconds, minutes, hours);

  // Syncs the current timer values with the Redux store.
  useEffect(() => {
    const values: TimerValues = { totalSeconds, seconds, minutes };
    dispatch(setTimerValuesAction(values));
  }, [dispatch, totalSeconds, seconds, minutes]);

  // Restarts the timer when the configured fixing time changes.
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + secondsRestart);
    restartRef.current(time);
    pauseRef.current();
    document.title = defaultDocumentTitle;
  }, [triggeredFixingTime, secondsRestart]);

  // Updates responsive timer styles when the viewport is resized.
  useEffect(() => {
    // Recalculates responsive classes whenever the viewport width changes.
    const updateResponsiveStyles = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setTraditionalButton(
        getTraditionalButtonStyle(width, classes.buttonBotton)
      );
      setFixingTimerClass(
        getFixingTimerStyle(width, classes.fixingTimerUp)
      );
    };

    window.addEventListener("resize", updateResponsiveStyles);
    updateResponsiveStyles();

    return () => window.removeEventListener("resize", updateResponsiveStyles);
  }, []);

  // Keeps the document title synchronized with the timer's running state.
  useEffect(() => {
    if (isRunning) {
      document.title =
        formatTimerMinutes(totalSeconds, minutes, hours) +
        ":" +
        (seconds < 10 ? `0${seconds}` : seconds) +
        `  ${defaultDocumentTitle}`;
    }

    if (totalSeconds === 0 && minutes === 0 && seconds === 0) {
      document.title = defaultDocumentTitle;
    }
  }, [isRunning, totalSeconds, minutes, seconds, hours]);

  // Initializes the timer with the configured duration on mount.
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + initialSecondsRef.current);
    restartRef.current(time);
    pauseRef.current();
    document.title = defaultDocumentTitle;
  }, []);

  return {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restartTimer,
    timeFormat,
    setFixingTimer,
    traditionalButton,
    fixingTimer,
    showResponsiveBreak: viewportWidth <= smallScreen,
  };
};
