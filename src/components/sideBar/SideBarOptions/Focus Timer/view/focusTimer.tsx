// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { translator } from "../../../../translator/translator.ts";
import { selectCurrentLanguage } from "../../../../../store/slices/Languages/LanguageSlice.ts";

// Component Styles
import classes from "./focosTimer.module.css";

export const FocusTimer = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);

  return (
    <>
      <div className={`${classes.text}`}>
        <h3>
          {translator(currentLanguage.name, "About us")} --{" "}
          {translator(currentLanguage.name, "Focus Timer")}
        </h3>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "Welcome to Focus Timer, your essential tool for enhancing concentration and maximizing productivity. In a world filled with distractions, we provide a customizable platform designed to help you focus on what truly matters. Whether you're studying, working, or engaging in a creative project, Focus Timer is here to elevate your efficiency and keep you on track."
          )}
        </p>
        <br />
        <h4>
          {translator(currentLanguage.name, "Elevate Your Productivity")}
        </h4>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "At Focus Timer, we understand the importance of personalized focus sessions. Our tool allows you to:"
          )}
        </p>
        <ul className={`${classes.bulletedList}`}>
          <li>
            <b>
              {translator(
                currentLanguage.name,
                "Set Custom Concentration Times:"
              )}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Tailor your focus intervals to match your workflow. Whether you prefer the classic Pomodoro Technique or custom durations, you have full control."
            )}
          </li>
          <li>
            <b>
              {translator(currentLanguage.name, "Choose Your Background:")}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Immerse yourself in an environment that inspires you. Select from a variety of backgrounds to create the perfect ambiance for your focus sessions."
            )}
          </li>
          <li>
            <b>{translator(currentLanguage.name, "Select Alarm Types:")}</b>{" "}
            {translator(
              currentLanguage.name,
              "Stay on schedule with customizable alarms. Choose the sounds that best suit your preferences to gently signal the end of each session."
            )}
          </li>
          <li>
            <b>
              {translator(currentLanguage.name, "Enjoy Background Music:")}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Enhance your concentration with our curated background music options. Find the perfect soundtrack to keep you engaged and minimize distractions."
            )}
          </li>
        </ul>
        <br />
        <h4>{translator(currentLanguage.name, "Global Accessibility")}</h4>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "We believe productivity tools should be accessible to everyone, everywhere. Focus Timer supports multiple languages to cater to our global community:"
          )}
        </p>
        <ul className={`${classes.bulletedList}`}>
          <li>{translator(currentLanguage.name, "English")}</li>
          <li>{translator(currentLanguage.name, "Spanish")}</li>
          <li>{translator(currentLanguage.name, "Portuguese")}</li>
          <li>{translator(currentLanguage.name, "Hindi")}</li>
        </ul>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "Switch effortlessly between languages and make Focus Timer truly your own, no matter where you are in the world."
          )}
        </p>
        <br />
        <h4>
          {translator(currentLanguage.name, "Why Choose Focus Timer?")}
        </h4>
        <br />
        <ul className={`${classes.bulletedList}`}>
          <li>
            <b>
              {translator(
                currentLanguage.name,
                "Set Custom Concentration Times:"
              )}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Break tasks into manageable intervals to maintain high levels of focus and achieve more in less time."
            )}
          </li>
          <li>
            <b>
              {translator(currentLanguage.name, "Personalized Experience:")}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Customize every aspect of your focus sessions to align with your preferences and optimize your productivity."
            )}
          </li>
          <li>
            <b>
              {translator(currentLanguage.name, "User-Friendly Interface:")}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Our intuitive design ensures you can set up and start your focus sessions with ease."
            )}
          </li>
          <li>
            <b>
              {translator(
                currentLanguage.name,
                "Multi-Device Compatibility:"
              )}
            </b>{" "}
            {translator(
              currentLanguage.name,
              "Access Focus Timer from any device with a web browser—be it your computer, tablet, or smartphone."
            )}
          </li>
        </ul>
        <br />
        <h4>{translator(currentLanguage.name, "Our Mission")}</h4>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "At Focus Timer, our mission is to empower individuals to reach their full potential by providing tools that foster deep concentration and effective time management. We are committed to helping you overcome distractions and accomplish your goals with confidence."
          )}
        </p>
        <h4>{translator(currentLanguage.name, "Get Started Today")}</h4>
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "Visit focustimeritisfocustime.com to embark on your journey toward unparalleled focus and efficiency."
          )}
        </p>
        <br />
        <hr />
        <br />
        <p>
          {translator(
            currentLanguage.name,
            "Embrace the power of tailored focus sessions and unlock your productivity potential with Focus Timer—where every second counts."
          )}
        </p>
      </div>
    </>
  );
};
