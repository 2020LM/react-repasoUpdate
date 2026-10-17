// Third-Party & Ecosystem Imports
import React from "react";
import { animated } from "react-spring";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectCurrentLanguage } from "../../../store/slices/Languages/LanguageSlice.ts";

// Internal Tools & Utilities
import { translator } from "../../translator/translator.ts";
import type { TimerFixerManager } from "../data/ObjectDescription.ts";
import upArrow from "../../../assets/img/icons/caret-flecha-hacia-arriba_1_11zon_105_11zon-removebg-preview.webp";
import downArrow from "../../../assets/img/icons/caret-abajo_16_11zon_102_11zon-removebg-preview.webp";
import close from "../../../assets/img/icons/cerrar_3_11zon_107_11zon-removebg-preview.png";
import closeRed from "../../../assets/img/icons/cerrar_rojo__2_11zon_106_11zon-removebg-preview.png";

// Local Components
import { useTimerFixerManager } from "../hooks/useTimerFixerManager.ts";
import { useTimerFixerStyle } from "./TimerFixerStyle.ts";

// Component Styles
import classes from "./TimerFixer.module.css";

export const TimerFixer = () => {

  const currentLanguage = useSelector(selectCurrentLanguage);
  const timerFixerManager: TimerFixerManager = useTimerFixerManager();
  const {
    value1,
    value2,
    value3,
    value4,
    setTimer,
    closeTimerFixer,
    handleValidation,
    summingCounter,
    subtractCounter,
  } = timerFixerManager;
  const { setTimerTransition, setBoxTimerTransition } = useTimerFixerStyle();

  return (
    <>
      {setTimerTransition((style, item) =>
        item ? (
          <animated.div
            id="TimerFixer"
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
                  <button aria-label="Close Modal"  className={`${classes.closeModal}`}
                    onClick={closeTimerFixer}>
                    <img src={close} alt="X" className={`${classes.x}`} />
                    <img
                      src={closeRed}
                      alt="X"
                      className={`${classes.xRojo}`}
                    />
                  </button>
                  <div className={`${classes.content}`}>
                    <div>
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Increase tens of minutes"
                        onClick={() => summingCounter("hours", 9, value1)}
                      >
                        <img alt="" src={upArrow} />
                      </button>
                      <input
                        id="hours"
                        maxLength={1}
                        value={value1}
                        onChange={handleValidation}
                        aria-label="Tens of minutes"
                      />
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Decrease tens of minutes"
                        onClick={() => subtractCounter("hours", 9, value1)}
                      >
                        <img alt="" src={downArrow} />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Increase minutes"
                        onClick={() => summingCounter("hour", 9, value2)}
                      >
                        <img alt="" src={upArrow} />
                      </button>
                      <input
                        id="hour"
                        maxLength={1}
                        value={value2}
                        onChange={handleValidation}
                        aria-label="Minutes"
                      />
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Decrease minutes"
                        onClick={() => subtractCounter("hour", 9, value2)}
                      >
                        <img alt="" src={downArrow} />
                      </button>
                    </div>
                    <div className={`${classes.twoPoints}`}>:</div>
                    <div>
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Increase tens of seconds"
                        onClick={() => summingCounter("minutes", 5, value3)}
                      >
                        <img alt="" src={upArrow} />
                      </button>
                      <input
                        id="minutes"
                        maxLength={1}
                        value={value3}
                        onChange={handleValidation}
                        aria-label="Ten of Seconds"
                      />
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Decrease tens of seconds"
                        onClick={() => subtractCounter("minutes", 5, value3)}
                      >
                        <img alt="" src={downArrow} />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Increase seconds"
                        onClick={() => summingCounter("seconds", 9, value4)}
                      >
                        <img alt="" src={upArrow} />
                      </button>
                      <input
                        id="seconds"
                        maxLength={1}
                        value={value4}
                        onChange={handleValidation}
                        aria-label="Seconds"
                      />
                      <button
                        type="button"
                        className={classes.arrowButton}
                        aria-label="Decrease seconds"
                        onClick={() => subtractCounter("seconds", 9, value4)}
                      >
                        <img alt="" src={downArrow} />
                      </button>
                    </div>
                  </div>
                  <button aria-label="Aceept button" onClick={setTimer}>
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
