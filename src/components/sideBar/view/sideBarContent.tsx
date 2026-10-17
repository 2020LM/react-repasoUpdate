// Third-Party & Ecosystem Imports
import React from "react";

// Local Components
import { Backgrounds } from "../SideBarOptions/backgrounds/view/backgrounds.tsx";
import { BackgroundSounds } from "../SideBarOptions/BackgroundSounds/view/backgroundSounds.tsx";
import { AlarmSound } from "../SideBarOptions/alarmSounds/view/alarmSounds.tsx";
import { LanguageOptions } from "../SideBarOptions/languegueOptions/view/language.tsx";
import { MainMenu } from "../SideBarOptions/mainMenu/view/mainMenu.tsx";
import { FocusTimer } from "../SideBarOptions/Focus Timer/view/focusTimer.tsx";

// Component Styles
import classes from "./sideBar.module.css";

export const SideBarContent = () => {
  return (
    <>
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <ul
            id="collapseExample1"
            className={`collapse show list-group list-group-flush ${classes.listItem}`}
          >
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className={`carousel-inner ${classes.optionContent}`}>
                <div className="carousel-item active">
                  <MainMenu />
                </div>
                <div className="carousel-item">
                  <Backgrounds />
                </div>
                <div className="carousel-item">
                  <AlarmSound />
                </div>
                <div className="carousel-item">
                  <BackgroundSounds />
                </div>
                <div className="carousel-item">
                  <LanguageOptions />
                </div>
                <div className="carousel-item">
                  <FocusTimer />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
