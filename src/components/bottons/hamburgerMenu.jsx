import classes from "./hamburgerMenu.module.css"; // Import CSS styling
import { useVisibleSideBar, useRightArrow } from "../../context/context";
import menu from "../../assets/img/icons/MenuBlanco-removebg-preview.png";

export const HamburgerMenu = () => {
  const [visibleSideBar, setVisibleSideBar] = useVisibleSideBar();
  const [rightArrow, setRightArrow] = useRightArrow();

  const hamburgerMenu = () => {
    setVisibleSideBar(!visibleSideBar);
    setRightArrow(true);
  };

  return (
    <div>
      <span onClick={hamburgerMenu}>
        <img src={menu} className={`${classes.menuHamburguesa}`} />
      </span>
    </div>
  );
};
