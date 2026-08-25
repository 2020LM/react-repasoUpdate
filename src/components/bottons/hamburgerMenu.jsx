// Third-Party & Ecosystem Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectVisibleSideBar } from "../../store/slices/SideBar/SideBar.js";
import { setVisibleSideBar as setVisibleSideBarAction, setRightArrow as setRightArrowAction} from "../../store/slices/SideBar/SideBar.js";

// Internal Tools & Utilities
import menu from "../../assets/img/icons/MenuBlanco-removebg-preview (1)_121_11zon.webp";

// Component Styles
import classes from "./hamburgerMenu.module.css"; // Import CSS styling

export const HamburgerMenu = () => {
  const visibleSideBar= useSelector(selectVisibleSideBar);

  const dispatch = useDispatch();

  const setVisibleSideBar = (value) => {
    dispatch(setVisibleSideBarAction(value));
  };

  const setRightArrow = (value) => {
    dispatch(setRightArrowAction(value));
  };

  const hamburgerMenu = () => {
    setVisibleSideBar(!visibleSideBar);
    setRightArrow(false);
  };

  return (
    <div>
      <span onClick={hamburgerMenu}>
        <img
          src={menu}
          alt="Hamburger menu"
          className={`${classes.menuHamburguesa}`}
        />
      </span>
    </div>
  );
};
