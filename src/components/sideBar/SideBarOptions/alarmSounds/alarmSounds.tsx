// Third-Party & Ecosystem Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../../store/slices/Languages/LanguageSlice.js";
import { selectAlarmSounds, selectCurrentAlarm
 } from "../../../../store/slices/Alarm/AlarmSlice.js";
import { setCurrentAlarm as setCurrentAlarmAction
} from "../../../../store/slices/Alarm/AlarmSlice.js";

import { translator } from "../../../translator/translator.js";
import AlarmConfiguration from "./AlarmConfiguration/AlarmConfiguration.js";

// Internal Tools & Utilities
import storage from "../../../../lib/storage.js";
import cheque from "../../../../assets/img/icons/cheque.webp";

// Component Styles
import classes from "./alarmSounds.module.css";

export const AlarmSound = () => {
  const alarmSounds = useSelector(selectAlarmSounds);
  const currentAlarm = useSelector(selectCurrentAlarm);
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);

  const setCurrentAlarm = (value: any) => {
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
        {alarmSounds.map((item: any, index: number) => {
          return (
            <li
              key={index}
              onClick={() => {
                setAlarm(index);
              }}
            >
              <a>
                {translator(currentLanguage.name, `Alarm`)} {item.id}
              </a>
              {item.id == currentAlarm.id && (
                <span className={classes.check}>
                  <img src={cheque}></img>
                </span>
              )}
            </li>
          );
        })}

      </ul>

      <AlarmConfiguration />

    </>
  );
};
