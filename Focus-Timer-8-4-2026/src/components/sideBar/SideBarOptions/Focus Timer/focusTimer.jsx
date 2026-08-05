import React from "react";

import classes from "./focosTimer.module.css";
import { useTranslator } from "../../../translator/translator";
import { useCurrentLanguage } from "../../../../context/context";

export const FocusTimer = () => {
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();

  return (
    <>
      <div className={`${classes.text}`}>
        <h3>
          {useTranslator(currentLanguage.name, "About us")} --{" "}
          {useTranslator(currentLanguage.name, "Focus Timer")}
        </h3>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "Welcome to Focus Timer, your essential tool for enhancing concentration and maximizing productivity. In a world filled with distractions, we provide a customizable platform designed to help you focus on what truly matters. Whether you're studying, working, or engaging in a creative project, Focus Timer is here to elevate your efficiency and keep you on track."
          )}
        </p>
        <br />
        <h4>
          {useTranslator(currentLanguage.name, "Elevate Your Productivity")}
        </h4>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "At Focus Timer, we understand the importance of personalized focus sessions. Our tool allows you to:"
          )}
        </p>
        <ul className={`${classes.bulletedList}`}>
          <li>
            <b>
              {useTranslator(
                currentLanguage.name,
                "Set Custom Concentration Times:"
              )}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Tailor your focus intervals to match your workflow. Whether you prefer the classic Pomodoro Technique or custom durations, you have full control."
            )}
          </li>
          <li>
            <b>
              {useTranslator(currentLanguage.name, "Choose Your Background:")}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Immerse yourself in an environment that inspires you. Select from a variety of backgrounds to create the perfect ambiance for your focus sessions."
            )}
          </li>
          <li>
            <b>{useTranslator(currentLanguage.name, "Select Alarm Types:")}</b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Stay on schedule with customizable alarms. Choose the sounds that best suit your preferences to gently signal the end of each session."
            )}
          </li>
          <li>
            <b>
              {useTranslator(currentLanguage.name, "Enjoy Background Music:")}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Enhance your concentration with our curated background music options. Find the perfect soundtrack to keep you engaged and minimize distractions."
            )}
          </li>
        </ul>
        <br />
        <h4>{useTranslator(currentLanguage.name, "Global Accessibility")}</h4>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "We believe productivity tools should be accessible to everyone, everywhere. Focus Timer supports multiple languages to cater to our global community:"
          )}
        </p>
        <ul className={`${classes.bulletedList}`}>
          <li>{useTranslator(currentLanguage.name, "English")}</li>
          <li>{useTranslator(currentLanguage.name, "Spanish")}</li>
          <li>{useTranslator(currentLanguage.name, "Portuguese")}</li>
          <li>{useTranslator(currentLanguage.name, "Hindi")}</li>
        </ul>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "Switch effortlessly between languages and make Focus Timer truly your own, no matter where you are in the world."
          )}
        </p>
        <br />
        <h4>
          {useTranslator(currentLanguage.name, "Why Choose Focus Timer?")}
        </h4>
        <br />
        <ul className={`${classes.bulletedList}`}>
          <li>
            <b>
              {useTranslator(
                currentLanguage.name,
                "Set Custom Concentration Times:"
              )}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Break tasks into manageable intervals to maintain high levels of focus and achieve more in less time."
            )}
          </li>
          <li>
            <b>
              {useTranslator(currentLanguage.name, "Personalized Experience:")}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Customize every aspect of your focus sessions to align with your preferences and optimize your productivity."
            )}
          </li>
          <li>
            <b>
              {useTranslator(currentLanguage.name, "User-Friendly Interface:")}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Our intuitive design ensures you can set up and start your focus sessions with ease."
            )}
          </li>
          <li>
            <b>
              {useTranslator(
                currentLanguage.name,
                "Multi-Device Compatibility:"
              )}
            </b>{" "}
            {useTranslator(
              currentLanguage.name,
              "Access Focus Timer from any device with a web browser—be it your computer, tablet, or smartphone."
            )}
          </li>
        </ul>
        <br />
        <h4>{useTranslator(currentLanguage.name, "Our Mission")}</h4>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "At Focus Timer, our mission is to empower individuals to reach their full potential by providing tools that foster deep concentration and effective time management. We are committed to helping you overcome distractions and accomplish your goals with confidence."
          )}
        </p>
        <h4>{useTranslator(currentLanguage.name, "Get Started Today")}</h4>
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "Visit focustimeritisfocustime.com to embark on your journey toward unparalleled focus and efficiency."
          )}
        </p>
        <br />
        <hr />
        <br />
        <p>
          {useTranslator(
            currentLanguage.name,
            "Embrace the power of tailored focus sessions and unlock your productivity potential with Focus Timer—where every second counts."
          )}
        </p>
      </div>
    </>
  );
};
