// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { store } from "../../../../../store/store.js";
import {
  setBackground,
  setBackgroundImages,
  setIndexBackgroundImage,
} from "../../../../../store/slices/Background/BackgroundSlice.js";

// Internal Tools & Utilities
import storage from "../../../../../lib/storage.js";

jest.unstable_mockModule("../../../../../components/timer/view/timer.tsx", () => ({
  Timer: () => null,
}));
jest.unstable_mockModule("../../../../../components/audio/AlarmAudioManager/view/AlarmAudioManager.tsx", () => ({
  AlarmAudioManager: () => null,
}));
jest.unstable_mockModule("../../../../../components/audio/BackgroundSoundManager/view/BackgroundSoundManager.tsx", () => ({
  BackgroundSoundManager: () => null,
}));
jest.unstable_mockModule("../../../../../components/hamburgerMenu/view/hamburgerMenu.tsx", () => ({
  HamburgerMenu: () => null,
}));
jest.unstable_mockModule("../../../../../components/sideBar/view/sideBar.tsx", () => ({
  SideBar: () => null,
}));
jest.unstable_mockModule("react-blurhash", () => ({
  Blurhash: () => null,
}));

// Local Components
const { FocusTimerPage } = await import("../../../../../Features/view/index.tsx");
const { BackgroundByType } = await import("../view/backgroundByType.tsx");

test("applies the selected background image to the body after clicking it", async () => {
  const previousBackground = store.getState().background.background;
  const previousBackgroundImages = store.getState().background.backgroundImages;
  const previousIndex = store.getState().background.indexBackgroundImage;
  const storageKeys = [
    "backgroundImage",
    "backgroundAlternativeImage",
    "indexBackgroundImage",
  ];
  const previousStorage = storageKeys.map((key) => [key, storage.get(key)] as const);
  const previousBodyBackground = document.body.style.backgroundImage;

  // Store Cofniguration.
  store.dispatch(setBackground("initial-background.jpg"));
  storage.set("backgroundImage", "initial-background.jpg");
  storage.set("backgroundAlternativeImage", "initial-background-mobile.jpg");
  store.dispatch(
    setBackgroundImages([
      {
        type: "Nature",
        src: "selected-wide.jpg",
        src2: "selected-mobile.jpg",
        hash1: "test-hash",
      },
    ])
  );
  store.dispatch(setIndexBackgroundImage(0));


  // Rendering the component.
  try {
    const { container } = render(
      <Provider store={store}>
        <>
          <FocusTimerPage />
          <BackgroundByType type="Nature" />
        </>
      </Provider>
    );

    await waitFor(() => {
      expect(document.body.style.backgroundImage).toBe("url(initial-background.jpg)");
    });

    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    if (!image) throw new Error("Background image was not rendered");

    fireEvent.load(image);
    fireEvent.click(image);

    await waitFor(() => {
      expect(document.body.style.backgroundImage).toBe("url(selected-wide.jpg)");
    });
  } finally {
    cleanup();
    store.dispatch(setBackground(previousBackground));
    store.dispatch(setBackgroundImages(previousBackgroundImages));
    store.dispatch(setIndexBackgroundImage(previousIndex));
    previousStorage.forEach(([key, value]) => {
      if (value === undefined) {
        storage.remove(key);
      } else {
        storage.set(key, value);
      }
    });
    document.body.style.backgroundImage = previousBodyBackground;
  }
});
