// Third-Party & Ecosystem Imports
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { useSelector , useDispatch } from "react-redux";


// Architecture & Global State Imports
import { selectFixingTimer, selectTriggeredFixingTime } from "../../store/slices/Time/TimeSlice.js";
import { setSecondsRestart as setSecondsRestartAction, 
         setInitialSeconds as setInitialSecondsAction,
         setTimeSetByUser as setTimeSetByUserAction, 
         setFixingTimer as setFixingTimerAction, 
         setTriggeredFixingTime as setTriggeredFixingTimeAction
         } from "../../store/slices/Time/TimeSlice.js";
import { translator } from "../translator/translator.js";
import { selectCurrentLanguage } from "../../store/slices/Languages/LanguageSlice.js";

// Internal Tools & Utilities
import storage from "../../lib/storage.js";
import upArrow from "../../assets/img/icons/caret-flecha-hacia-arriba_1_11zon_105_11zon-removebg-preview.webp";
import downArrow from "../../assets/img/icons/caret-abajo_16_11zon_102_11zon-removebg-preview.webp";
import close from "../../assets/img/icons/cerrar_3_11zon_107_11zon-removebg-preview.png";
import closeRed from "../../assets/img/icons/cerrar_rojo__2_11zon_106_11zon-removebg-preview.png";

// Component Styles
import classes from "./ButtonModal.module.css";

export const ButtonModal = () => {

  const currentLanguage = useSelector(selectCurrentLanguage);
  const triggeredFixingTime = useSelector(selectTriggeredFixingTime);
  const fixingTimer = useSelector(selectFixingTimer);

  const dispatch = useDispatch();

  const setSecondsRestart = (value: number) => dispatch(setSecondsRestartAction(value));
  const setSeconds = (value: number) => dispatch(setInitialSecondsAction(value));
  const setTimeSetByUser = (value: boolean) => dispatch(setTimeSetByUserAction(value));
  const setFixingTimer = (value: boolean) => dispatch(setFixingTimerAction(value));
  const setTriggeredFixingTime = (value: boolean) => dispatch(setTriggeredFixingTimeAction(value));

  const [value1, setValue1] = useState("3");
  const [value2, setValue2] = useState("0");
  const [value3, setValue3] = useState("0");
  const [value4, setValue4] = useState("0");


  const setTimer = () => {
    const minutesValue = parseInt(value1.toString() + value2.toString()) * 60;
    const secondsValue = parseInt(value3.toString() + value4.toString());
    setSecondsRestart(minutesValue + secondsValue);
    setSeconds(minutesValue + secondsValue);
    setTimeSetByUser(true);
    setFixingTimer(false);
    setTriggeredFixingTime(!triggeredFixingTime);
    storage.set("seconds", minutesValue + secondsValue);
  };

  const setTimerTransition = useTransition(fixingTimer, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  const setBoxTimerTransition = useTransition(fixingTimer, {
    from: { x: -195, y: -175 },
    enter: { x: -195, y: -125 },
    leave: { x: -195, y: -150 },
    config: { duration: 500 },
  });

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: data, id } = event.currentTarget;

    if (
      data == "0" ||
      data == "1" ||
      data == "2" ||
      data == "3" ||
      data == "4" ||
      data == "5" ||
      data == "6" ||
      data == "7" ||
      data == "8" ||
      data == "9"
    ) {
      setNewValue(id, data);
    }
  };

  const SummingCounter = (id: string, maxUnit: number, data: string) => {
    let newData = parseInt(data);
    if (parseInt(data) < maxUnit) {
      newData = newData + 1;
    } else {
      newData = 0;
    }
    setNewValue(id, newData.toString());
  };

  const SubstractCounter = (id: string, maxUnit: number, data: string) => {
    let newData = parseInt(data);
    if (parseInt(data) > 0) {
      newData = newData - 1;
    } else {
      newData = maxUnit;
    }
    setNewValue(id, newData.toString());
  };

  const setNewValue = (id: string, newValue: string) => {
    if (id == "hours") {
      setValue1(newValue);
      return;
    }
    if (id == "hour") {
      setValue2(newValue);
      return;
    }

    if (id == "minutes") {
      setValue3(newValue);
      return;
    }

    if (id == "seconds") {
      setValue4(newValue);
    }
  };

  return (
    <>
      {setTimerTransition((style, item) =>
        item ? (
          <animated.div
            id="ButtonModal"
            style={style}
            className={`${classes.modal}`}
          >
            <div id="overlay" className={`${classes.overlay}`}></div>
            {setBoxTimerTransition((style, item) =>
              item ? (
                <animated.div
                  id="Content"
                  style={style}
                  className={`${classes.modalContent}`}
                >
                  <h2 className={`${classes.text}`}>
                    {translator(currentLanguage.name, "Set Time")}
                  </h2>
                  <span
                    className={`${classes.closeModal}`}
                    onClick={() => setFixingTimer(!fixingTimer)}
                  >
                    <img src={close} alt="X" className={`${classes.x}`} />
                    <img
                      src={closeRed}
                      alt="X"
                      className={`${classes.xRojo}`}
                    />
                  </span>
                  <div className={`${classes.content}`}>
                    <div>
                      <img
                        alt="Arrow up"
                        src={upArrow}
                        onClick={() => SummingCounter("hours", 9, value1)}
                      />
                      <input
                        id="hours"
                        maxLength={1}
                        value={value1}
                        onChange={handleValidation}
                      />
                      <img
                        alt="Arrow down"
                        src={downArrow}
                        onClick={() => SubstractCounter("hours", 9, value1)}
                      />
                    </div>
                    <div>
                      <img
                        alt="Arrow up"
                        src={upArrow}
                        onClick={() => SummingCounter("hour", 9, value2)}
                      />
                      <input
                        id="hour"
                        maxLength={1}
                        value={value2}
                        onChange={handleValidation}
                      />
                      <img
                        alt="Arrow down"
                        src={downArrow}
                        onClick={() => SubstractCounter("hour", 9, value2)}
                      />
                    </div>
                    <div className={`${classes.twoPoints}`}>:</div>
                    <div>
                      <img
                        alt="Arrow up"
                        src={upArrow}
                        onClick={() => SummingCounter("minutes", 5, value3)}
                      />
                      <input
                        id="minutes"
                        maxLength={1}
                        value={value3}
                        onChange={handleValidation}
                      />
                      <img
                        alt="Arrow down"
                        src={downArrow}
                        onClick={() => SubstractCounter("minutes", 5, value3)}
                      />
                    </div>
                    <div>
                      <img
                        alt="Arrow up"
                        src={upArrow}
                        onClick={() => SummingCounter("seconds", 9, value4)}
                      />
                      <input
                        id="seconds"
                        maxLength={1}
                        value={value4}
                        onChange={handleValidation}
                      />
                      <img
                        alt="Arrow down"
                        src={downArrow}
                        onClick={() => SubstractCounter("seconds", 9, value4)}
                      />
                    </div>
                  </div>
                  <button onClick={setTimer}>
                    {" "}
                    {translator(currentLanguage.name, "Accept")}{" "}
                  </button>
                </animated.div>
              ) : (
                ""
              )
            )}
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};
