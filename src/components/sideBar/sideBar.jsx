import classes from "./sideBar.module.css";
import {
  useVisibleSideBar,
  useRightArrow,
  useCurrentLanguage,
} from "../../context/context";
import close from "../../assets/img/icons/cerrar_3_11zon_107_11zon-removebg-preview.png";
import closeRed from "../../assets/img/icons/cerrar_rojo__2_11zon_106_11zon-removebg-preview.png";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import right from "../../assets/img/icons/icons8-derecha-24.png";
import { Scrollbars } from "react-custom-scrollbars";
import { SideBarContent } from "./sideBarContent";

const bigSize = 992;
const smallSize = 400;

const setStyleOfModal = () => {
  if (window.innerWidth > bigSize) {
    return [
      ["100%", "0%"],
      ["0%", "0%"],
      ["100%", "0%"],
    ];
  }

  if (window.innerHeight <= smallSize) {
    return [
      [0, -50],
      [0, 5],
      [0, -50],
    ];
  }

  return [
    [0, -50],
    [0, 30],
    [0, -50],
  ];
};

const settingModalOpacity = () => {
  if (window.innerWidth < bigSize) {
    return [0, 1];
  }
  return [1, 1];
};

export const SideBard = () => {
  const [visibleSideBar, setVisibleSideBar] = useVisibleSideBar();
  const [putOptions, setPutOptions] = useRightArrow();
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();
  const [modalStyle, setModalStyle] = useState(setStyleOfModal());
  const [modalOpacity, setModalOpacity] = useState(settingModalOpacity());

  const setTimerOverlayTransition = useTransition(visibleSideBar, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  const setSideBarTransition = useTransition(visibleSideBar, {
    from: {
      x: modalStyle[0][0],
      y: modalStyle[0][1],
      opacity: modalOpacity[0],
    },
    enter: {
      x: modalStyle[1][0],
      y: modalStyle[1][1],
      opacity: modalOpacity[1],
    },
    leave: {
      x: modalStyle[2][0],
      y: modalStyle[2][1],
      opacity: modalOpacity[0],
    },
    config: { duration: 500 },
  });

  return (
    <>
      {
        <>
          {setTimerOverlayTransition((style, item) =>
            item ? (
              <animated.div
                id="overlay"
                style={style}
                className={`${classes.overlay}`}
              ></animated.div>
            ) : (
              ""
            )
          )}
          {setSideBarTransition((style, item) =>
            item ? (
              <animated.nav
                style={style}
                id="sidebarMenu"
                className={`collapse d-block collapse bg-white ${classes.sidebar}`}
              >
                <span
                  className={`${classes.closeModal}`}
                  onClick={() => setVisibleSideBar(!visibleSideBar)}
                >
                  <img
                    src={close}
                    alt="X"
                    className={`${classes.x}`}
                    onClick={() => setPutOptions(false)}
                  />
                  <img
                    src={closeRed}
                    alt="X"
                    className={`${classes.xRojo}`}
                    onClick={() => setPutOptions(false)}
                  />
                </span>

                {!putOptions && (
                  <img
                    src={right}
                    alt="->"
                    onClick={() => setPutOptions(true)}
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide-to="0"
                    className={`${classes.rigthArrow}`}
                  />
                )}

                {window.innerWidth >= bigSize && (
                  <Scrollbars style={{ width: "100%", height: "85vh" }}>
                    <SideBarContent />
                  </Scrollbars>
                )}
                {window.innerWidth < bigSize && <SideBarContent />}
              </animated.nav>
            ) : (
              ""
            )
          )}
        </>
      }
    </>
  );
};
