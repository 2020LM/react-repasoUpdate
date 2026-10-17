// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { beforeEach } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { store } from "../../../../../../store/store.ts"
import { setMutedMusic } from "../../../../../../store/slices/Sounds/SoundsSlice.ts";
import storage from "../../../../../../lib/storage.ts";

// Local Components
import { BackgroundSoundConfiguration } from "../BackgroundSoundConfiguration.tsx"

beforeEach(() => {
    // Store Configuration.
    store.dispatch(setMutedMusic(false));
    storage.set("mutedMusic", false);

    // Rendering the Component.
    render(
        <Provider store={store}>
            <BackgroundSoundConfiguration />
        </Provider>
    );
});

test("updates music volume when user manually moves the slider", () => {
  // Selecting the element.
  const musicSlider = screen.getByRole("slider");

  // 2. Changing the value to 75
  fireEvent.change(musicSlider, { target: { value: "75" } });

  // Verify the slider, displayed value, Redux state, and persisted preference.
  expect(musicSlider).toHaveValue("75");
  expect(screen.getByText("75")).toBeInTheDocument();
  expect(store.getState().sounds.volumeMusic).toBe(75);
  expect(storage.get("backgroundSoundVolume")).toBe(75);

})

test("To check if mute music and unmute music works.", () => {
  // Selecting the element.
  const muteMusic = screen.getByRole("button",
    {name: RegExp("Mute music")}
  )

  // To mute the music.
  fireEvent.click(muteMusic)

  // Assertion: To check if the music is muted.
  expect(screen.getByRole("button",
    {name: RegExp("Unmute music")}
  )).toBeInTheDocument()

  expect(screen.queryByRole("button",
    {name: RegExp("Mute music")}
  )).not.toBeInTheDocument()
  expect(store.getState().sounds.mutedMusic).toBe(true);
  expect(storage.get("mutedMusic")).toBe(true);

   // To unmute the music.
  fireEvent.click(screen.getByRole("button", { name: RegExp("Unmute music") }));

  // Assertion: To check if the music is not muted.
    expect(screen.getByRole("button",
    {name: RegExp("Mute music")}
    )).toBeInTheDocument()
  expect(store.getState().sounds.mutedMusic).toBe(false);
  expect(storage.get("mutedMusic")).toBe(false);

  expect(screen.queryByRole("button",
    {name: RegExp("Unmute music")}
    )).not.toBeInTheDocument()
})
