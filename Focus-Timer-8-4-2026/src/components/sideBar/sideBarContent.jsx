import React from "react";

import classes from "./sideBar.module.css";
import { Backgrounds } from "./SideBarOptions/backgrounds/backgrounds";
import { BackgroundSounds } from "./SideBarOptions/BackgroundSounds/backgroundSounds";
import { AlarmSound } from "./SideBarOptions/alarmSounds/alarmSounds";
import { LanguagueOptions } from "./SideBarOptions/languegueOptions/language";
import { MainMenu } from "./SideBarOptions/mainMenu/mainMenu";
import { FocusTimer } from "./SideBarOptions/Focus Timer/focusTimer";

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
                  <LanguagueOptions />
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
