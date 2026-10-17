// Third-Party & Ecosystem Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectVisibleSideBar } from "../../../store/slices/SideBar/SideBarSlice.js";
import { setVisibleSideBar as setVisibleSideBarAction, setRightArrow as setRightArrowAction} from "../../../store/slices/SideBar/SideBarSlice.js";

// Internal Tools & Utilities
import menu from "../../../assets/img/icons/MenuBlanco-removebg-preview (1)_121_11zon.webp";

// Component Styles
import classes from "./hamburgerMenu.module.css"; // Import CSS styling

export const HamburgerMenu = () => {
  const visibleSideBar= useSelector(selectVisibleSideBar);

  const dispatch = useDispatch();

  const setVisibleSideBar = (value: boolean) => {
    dispatch(setVisibleSideBarAction(value));
  };

  const setRightArrow = (value: boolean) => {
    dispatch(setRightArrowAction(value));
  };

  const hamburgerMenu = () => {
    setVisibleSideBar(!visibleSideBar);
    setRightArrow(false);
  };

  return (
    <div>
      <button
        type="button"
        className={classes.hamburgerButton}
        aria-label="Open sidebar menu"
        onClick={hamburgerMenu}
      >
        <img
          src={menu}
          alt=""
          className={`${classes.menuHamburguesa}`}
        />
      </button>
    </div>
  );
};
