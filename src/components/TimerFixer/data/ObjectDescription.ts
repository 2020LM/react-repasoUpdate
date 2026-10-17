import type { ChangeEvent } from "react";

export type TimerDigitId = "hours" | "hour" | "minutes" | "seconds";

export type TimerFixerManager = {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  setTimer: () => void;
  closeTimerFixer: () => void;
  handleValidation: (event: ChangeEvent<HTMLInputElement>) => void;
  summingCounter: (
    id: TimerDigitId,
    maxUnit: number,
    data: string
  ) => void;
  subtractCounter: (
    id: TimerDigitId,
    maxUnit: number,
    data: string
  ) => void;
};
