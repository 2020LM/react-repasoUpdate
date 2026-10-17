// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { beforeEach } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

// Architecture & Global State Imports
import {
  setCurrentSong,
  updateSong,
} from "../../../../../store/slices/Sounds/SoundsSlice.js";
import { store } from "../../../../../store/store.js";

// Local Components
import { BackgroundSound } from "../view/BackgroundSound.tsx";

const songIndex = 0;
const songDuration = 200;

beforeEach(() => {
  store.dispatch(setCurrentSong({}));
  store.dispatch(
    updateSong({ index: songIndex, attribute: "duration", value: songDuration })
  );
  store.dispatch(
    updateSong({ index: songIndex, attribute: "currentTime", value: 0 })
  );
  store.dispatch(
    updateSong({ index: songIndex, attribute: "repeat", value: false })
  );

  render(
    <Provider store={store}>
      <BackgroundSound index={songIndex} />
    </Provider>
  );
});

test("toggles playback between Play and Pause", () => {
  fireEvent.click(screen.getByRole("button", { name: "Play" }));

  expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Play" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Pause" }));

  expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Pause" })).not.toBeInTheDocument();
});

test("toggles loop on and off", () => {
  fireEvent.click(screen.getByRole("button", { name: "Enable loop" }));

  expect(screen.getByRole("button", { name: "Disable loop" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Enable loop" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Disable loop" }));

  expect(screen.getByRole("button", { name: "Enable loop" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Disable loop" })).not.toBeInTheDocument();
});

test("updates playback progress when the slider is moved halfway", () => {
  const progressSlider = screen.getByRole("slider", {
    name: "Nature progress",
  });

  fireEvent.change(progressSlider, { target: { value: "100" } });

  expect(progressSlider).toHaveValue("100");
  expect(screen.getByText("1:40")).toBeInTheDocument();
});