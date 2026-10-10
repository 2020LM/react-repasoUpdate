// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { beforeEach } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { BackgroundSoundConfiguration } from "../BackgroundSoundConfiguration.tsx"
import { store } from "../../../../../../store/store.ts"
import { setMutedMusic } from "../../../../../../store/slices/Sounds/SoundsSlice.ts";

beforeEach(() => {
    // Store Configuration.
    store.dispatch(setMutedMusic(false));

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

  // 3. Assertion: Verify that the slider value and the display span reflect the change
  expect(musicSlider).toHaveValue("75");
  expect(screen.getByText("75")).toBeInTheDocument();

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

   // To unmute the music.
  fireEvent.click(muteMusic)

  // Assertion: To check if the music is not muted.
    expect(screen.getByRole("button",
    {name: RegExp("Mute music")}
    )).toBeInTheDocument()

  expect(screen.queryByRole("button",
    {name: RegExp("Unmute music")}
    )).not.toBeInTheDocument()
})
