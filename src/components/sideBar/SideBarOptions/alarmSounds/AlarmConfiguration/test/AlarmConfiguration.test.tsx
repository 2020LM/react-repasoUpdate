// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { beforeEach } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { store } from "../../../../../../store/store.ts"
import { setMutedAlarm } from "../../../../../../store/slices/Alarm/AlarmSlice.js";

// Local Components
import { AlarmConfiguration } from "../AlarmConfiguration.tsx"

beforeEach(() => {
    // Store Configuration.
    store.dispatch(setMutedAlarm(false));

    // Rendering the Component.
    render(
        <Provider store={store}>
            <AlarmConfiguration />
        </Provider>
    );
});

test("Checking if all the elements are in the screen", () => {
    // Checking that all the element are in the screen.

    expect(screen.getAllByRole("list")).toHaveLength(1)
    expect(screen.getAllByRole("listitem")).toHaveLength(1)

    const volumeInput = screen.getByRole('slider')
    expect(volumeInput).toHaveValue('50')
    expect(volumeInput).toHaveAttribute('max', '100')
    expect(volumeInput).toHaveAttribute('min','0')

})

test("toggles the alarm mute state from the volume and silence controls", async () => {
    const silenceButton = screen.getByRole("button", { name: "Silence" });
    const muteButton = await screen.findByRole("button", { name: "Mute" });

    fireEvent.click(muteButton);

    expect(silenceButton).toHaveAttribute("aria-pressed", "true");
    expect(silenceButton.querySelector("span.check img")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unmute button" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Mute" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Unmute button" }));

    expect(silenceButton).toHaveAttribute("aria-pressed", "false");
    expect(silenceButton.querySelector("span.check img")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Mute" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Unmute button" })).not.toBeInTheDocument();

    fireEvent.click(silenceButton);

    expect(silenceButton).toHaveAttribute("aria-pressed", "true");
    expect(silenceButton.querySelector("span.check img")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unmute button" })).toBeInTheDocument();
});

test("updates alarm volume when user manually moves the slider", () => {
  // Selecting the element.
  const volumeSlider = screen.getByRole("slider");

  // 2. Changing the value to 75
  fireEvent.change(volumeSlider, { target: { value: "75" } });

  // 3. Assertion: Verify that the slider value and the display span reflect the change
  expect(volumeSlider).toHaveValue("75");
  expect(screen.getByText("75")).toBeInTheDocument();
});
