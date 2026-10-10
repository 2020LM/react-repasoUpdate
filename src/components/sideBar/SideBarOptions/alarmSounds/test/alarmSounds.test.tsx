// Third-Party & Ecosystem Imports
import { beforeEach } from "@jest/globals";
import { render, screen, fireEvent, within } from "@testing-library/react"
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

// Architecture & Global State Imports
import { AlarmSound } from "../alarmSounds.tsx";
import { store } from "../../../../../store/store.ts"
import { setMutedAlarm } from "../../../../../store/slices/Alarm/AlarmSlice.js";

beforeEach(() => {
    // Store Configuration.
    store.dispatch(setMutedAlarm(false));

    // Rendering the Component.
    render(
        <Provider store={store}>
            <AlarmSound />
        </Provider>
    );
});

test("Checking if all the elements are in the screen", () => {
    // Checking that all the element are in the screen.

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getAllByRole("list")).toHaveLength(2)
    expect(screen.getAllByRole("listitem")).toHaveLength(13)
    expect(screen.getAllByRole("button")).toHaveLength(14)

})

test("Flow test: updates checks and mute state correctly upon user clicks", () => {
  // 1. Click on 'Alarm 2'
  const alarm2Btn = screen.getByRole("button", { name: new RegExp("Alarm 2", "i") });
  fireEvent.click(alarm2Btn);

  // Assertion: Exactly 2 images in total (1 unmuted volume icon + 1 check on Alarm 2)
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(within(alarm2Btn).getByRole("img")).toBeInTheDocument();

  // 2. Click the unmuted icon to MUTE
  const muteBtn = screen.getByRole("button", { name: new RegExp("^Mute$", "i") });
  fireEvent.click(muteBtn);

  // Assertion:
  // - Silence button must render its check image and state
  const silenceBtn = screen.getByRole("button", { name: new RegExp("Silence", "i") });
  expect(within(silenceBtn).getByRole("img")).toBeInTheDocument();
  expect(silenceBtn).toHaveAttribute("aria-pressed", "true");

  // - Alarm 2 keeps its check image
  expect(within(alarm2Btn).getByRole("img")).toBeInTheDocument();

  // - Total images = 3 (1 muted volume icon + 1 Silence check + 1 Alarm 2 check)
  expect(screen.getAllByRole("img")).toHaveLength(3);

  // - Volume icon toggles to "Unmute button"
  const unmuteBtn = screen.getByRole("button", { name: new RegExp("Unmute button", "i") });
  expect(unmuteBtn).toBeInTheDocument();

  // 3. Click on 'Alarm 3'
  const alarm3Btn = screen.getByRole("button", { name: new RegExp("Alarm 3", "i") });
  fireEvent.click(alarm3Btn);

  // Assertion:
  // - Volume icon remains muted
  expect(screen.getByRole("button", { name: new RegExp("Unmute button", "i") })).toBeInTheDocument();
  // - Silence button retains its check
  expect(within(silenceBtn).getByRole("img")).toBeInTheDocument();
  // - Alarm 3 displays its check
  expect(within(alarm3Btn).getByRole("img")).toBeInTheDocument();
  // - Alarm 2 no longer contains a check image
  expect(within(alarm2Btn).queryByRole("img")).not.toBeInTheDocument();

  // 4. Click 'Silence' to UNMUTE
  fireEvent.click(silenceBtn);

  // Assertion:
  // - Total images = 2 (1 unmuted volume icon + 1 Alarm 3 check)
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(screen.getByRole("button", { name: new RegExp("^Mute$", "i") })).toBeInTheDocument();
  expect(within(silenceBtn).queryByRole("img")).not.toBeInTheDocument();
  expect(silenceBtn).toHaveAttribute("aria-pressed", "false");
  expect(within(alarm3Btn).getByRole("img")).toBeInTheDocument();

  // 5. Click 'Silence' to MUTE again
  fireEvent.click(silenceBtn);

  // Assertion:
  // - Total images = 3
  expect(screen.getAllByRole("img")).toHaveLength(3);
  expect(screen.getByRole("button", { name: new RegExp("Unmute button", "i") })).toBeInTheDocument();
  expect(within(silenceBtn).getByRole("img")).toBeInTheDocument();
  expect(within(alarm3Btn).getByRole("img")).toBeInTheDocument();

  // 6. Click muted volume icon ("Unmute button") to UNMUTE
  const currentUnmuteBtn = screen.getByRole("button", { name: new RegExp("Unmute button", "i") });
  fireEvent.click(currentUnmuteBtn);

  // Final Assertion:
  // - Total images = 2 (1 unmuted volume icon + 1 Alarm 3 check)
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(within(silenceBtn).queryByRole("img")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: new RegExp("^Mute$", "i") })).toBeInTheDocument();
  expect(within(alarm3Btn).getByRole("img")).toBeInTheDocument();
});