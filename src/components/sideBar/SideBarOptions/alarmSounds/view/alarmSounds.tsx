// Third-Party & Ecosystem Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.ts";
import { selectAlarmSounds, selectCurrentAlarm
 } from "../../../../../store/slices/Alarm/AlarmSlice.ts";
import { setCurrentAlarm as setCurrentAlarmAction
} from "../../../../../store/slices/Alarm/AlarmSlice.ts";

// Internal Tools & Utilities
import { translator } from "../../../../translator/translator.ts";
import storage from "../../../../../lib/storage.ts";
import cheque from "../../../../../assets/img/icons/cheque.webp";

// Local Components
import { AlarmConfiguration } from "../AlarmConfiguration/AlarmConfiguration.tsx";

// Component Styles
import classes from "./alarmSounds.module.css";

export const AlarmSound = () => {
  const alarmSounds = useSelector(selectAlarmSounds);
  const currentAlarm = useSelector(selectCurrentAlarm);
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);

  const setCurrentAlarm = (value: (typeof alarmSounds)[number]) => {
    dispatch(setCurrentAlarmAction(value));
  };

  const setAlarm = (index: number) => {
    if (!Array.isArray(alarmSounds) || index < 0 || index >= alarmSounds.length) {
      return;
    }

    const selectedAlarm = alarmSounds[index];
    setCurrentAlarm(selectedAlarm);
    storage.set("currentAlarm", index);

  };

  return (
    <>
      <h3>{translator(currentLanguage.name, "Alarms")}</h3>
      <ul className={`${classes.alarmSound}`}>
        {alarmSounds.map((item, index) => {
          const alarmLabel = `${translator(currentLanguage.name, "Alarm")} ${item.id}`;

          return (
            <li key={index}>
              <button
                type="button"
                className={classes.alarmOption}
                aria-label={alarmLabel}
                onClick={() => setAlarm(index)}
              >
                <a>{alarmLabel}</a>
                {item.id == currentAlarm.id && (
                  <span className={classes.check}>
                    <img src={cheque} alt="" />
                  </span>
                )}
              </button>
            </li>
          );
        })}

      </ul>

      <AlarmConfiguration />

    </>
  );
};
