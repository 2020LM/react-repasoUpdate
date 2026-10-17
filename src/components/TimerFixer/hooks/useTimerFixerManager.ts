// Third-Party & Ecosystem Imports
import { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import {
  selectTriggeredFixingTime,
  setSecondsRestart,
  setInitialSeconds,
  setTimeSetByUser,
  setFixingTimer as setFixingTimerAction,
  setTriggeredFixingTime,
} from "../../../store/slices/Time/TimeSlice.ts";

// Internal Tools & Utilities
import storage from "../../../lib/storage.ts";
import type {
  TimerDigitId,
  TimerFixerManager,
} from "../data/ObjectDescription.ts";

// Checks whether an input ID matches one of the timer digit fields.
const isTimerDigitId = (id: string): id is TimerDigitId =>
  id === "hours" || id === "hour" || id === "minutes" || id === "seconds";

// Manages timer digit values, validation, counters, and timer updates.
export const useTimerFixerManager = (): TimerFixerManager => {
  const dispatch = useDispatch();
  const triggeredFixingTime = useSelector(selectTriggeredFixingTime);

  const [value1, setValue1] = useState("3");
  const [value2, setValue2] = useState("0");
  const [value3, setValue3] = useState("0");
  const [value4, setValue4] = useState("0");

  // Updates the state value associated with a timer digit input.
  const setNewValue = (id: TimerDigitId, newValue: string) => {
    switch (id) {
      case "hours":
        setValue1(newValue);
        break;
      case "hour":
        setValue2(newValue);
        break;
      case "minutes":
        setValue3(newValue);
        break;
      case "seconds":
        setValue4(newValue);
        break;
    }
  };

  // Saves the selected duration and updates the timer-related Redux state.
  const setTimer = () => {
    const totalSeconds =
      Number(`${value1}${value2}`) * 60 + Number(`${value3}${value4}`);

    dispatch(setSecondsRestart(totalSeconds));
    dispatch(setInitialSeconds(totalSeconds));
    dispatch(setTimeSetByUser(true));
    dispatch(setFixingTimerAction(false));
    dispatch(setTriggeredFixingTime(!triggeredFixingTime));
    storage.set("seconds", totalSeconds);
  };

  // Closes the timer configuration modal.
  const closeTimerFixer = () => {
    dispatch(setFixingTimerAction(false));
  };

  // Accepts a single numeric digit and updates its corresponding field.
  const handleValidation = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.currentTarget;

    if (/^\d$/.test(value) && isTimerDigitId(id)) {
      setNewValue(id, value);
    }
  };

  // Increments or decrements a timer digit with wraparound at its limit.
  const updateCounter = (
    id: TimerDigitId,
    maxUnit: number,
    data: string,
    increment: boolean
  ) => {
    const currentValue = Number.parseInt(data, 10);
    const nextValue = increment
      ? currentValue < maxUnit
        ? currentValue + 1
        : 0
      : currentValue > 0
        ? currentValue - 1
        : maxUnit;

    setNewValue(id, nextValue.toString());
  };

  // Increases the selected timer digit by one.
  const summingCounter = (id: TimerDigitId, maxUnit: number, data: string) =>
    updateCounter(id, maxUnit, data, true);

  // Decreases the selected timer digit by one.
  const subtractCounter = (id: TimerDigitId, maxUnit: number, data: string) =>
    updateCounter(id, maxUnit, data, false);

  return {
    value1,
    value2,
    value3,
    value4,
    setTimer,
    closeTimerFixer,
    handleValidation,
    summingCounter,
    subtractCounter,
  };
};
