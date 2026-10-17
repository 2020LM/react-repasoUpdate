// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { render, 
         screen , 
         fireEvent , 
         waitFor ,
         waitForElementToBeRemoved } from "@testing-library/react";
import { beforeEach, jest } from "@jest/globals";
import { Provider } from "react-redux";
import { useState } from "react"

// Architecture & Global State Imports
import { store } from "../../../store/store.ts";
import { translator } from "../../translator/translator.ts";
import {
  setFixingTimer,
  setInitialSeconds,
  setSecondsRestart,
  setTriggeredFixingTime,
} from "../../../store/slices/Time/TimeSlice.js";

// Defining global variables and funcitons.
const mockRestart = jest.fn();
const language = store.getState().language.currentLanguage.name;
const expiryTimestamp = new Date(Date.now() + 25 * 60 * 1000);

const createMockTimerValues = () => ({
  totalSeconds: 1500,
  seconds: 0,
  minutes: 25,
  hours: 0,
  days: 0,
});

let mockTimerValues = createMockTimerValues();
let mockTimerUpdatesOnRestart = false;

beforeEach(() => {
  mockTimerValues = createMockTimerValues();
  mockTimerUpdatesOnRestart = false;
  store.dispatch(setFixingTimer(false));
  store.dispatch(setInitialSeconds(1500));
  store.dispatch(setSecondsRestart(1500));
  store.dispatch(setTriggeredFixingTime(false));
});

jest.unstable_mockModule("react-timer-hook", () => ({
  useTimer: jest.fn(() => {
    const [isRunning, setIsRunning] = useState(false);
    const [, setMockRevision] = useState(0);

    return {
      ...mockTimerValues,
      isRunning,
      start: jest.fn(),
      pause: jest.fn(() => setIsRunning(false)),
      resume: jest.fn(() => setIsRunning(true)),
      restart: jest.fn((expiryTimestamp: Date) => {
        mockRestart(expiryTimestamp);

        if (mockTimerUpdatesOnRestart) {
          const totalSeconds = Math.max(
            0,
            Math.ceil((expiryTimestamp.getTime() - Date.now()) / 1000)
          );
          mockTimerValues = {
            totalSeconds,
            seconds: totalSeconds % 60,
            minutes: Math.floor(totalSeconds / 60) % 60,
            hours: Math.floor(totalSeconds / 3600) % 24,
            days: Math.floor(totalSeconds / 86400),
          };
          setMockRevision((revision) => revision + 1);
          setIsRunning(false);
        }
      }),
    };
  }),
}));

const { Timer } = await import("../view/timer.tsx");

describe("Checking if each element is showing or hiding porperly", () => {
  test("renders the timer and its initial controls when time remains", () => {

    // Rendering the components.
    render(
      <Provider store={store}>
        <Timer expiryTimestamp={expiryTimestamp} />
      </Provider>
    );

    // Making the assertion for the heading of the timer.
    expect(
      screen.getByRole("heading", {
        name: translator(language, "Focus Timer"),
      })
    ).toBeInTheDocument();

    // Making assertion to check if each component are present on the screen.
    expect(
      screen.getByRole("button", {
        name: translator(language, "Set Time"),
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: translator(language, "Start Timer"),
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: translator(language, "Restart Timer"),
      })
    ).toBeInTheDocument();

   // Assertion if Pause Timer button is not in the screen.
    expect(
      screen.queryByRole("button", {
        name: translator(language, "Pause Timer"),
      })
    ).not.toBeInTheDocument();
  });



  //-------------------------------------------------------------------------------------



  test("Checking that Start Timer and Pause Timer appears properly", () => {

    // Rendering the components.
    render(
      <Provider store={store}>
        <Timer expiryTimestamp={expiryTimestamp} />
      </Provider>
    );

    // Making click in the start Timer button
    const startTimer = screen.getByRole("button", {
        name: translator(language, "Start Timer")
        }
    )

    fireEvent.click(startTimer)

    // Making assertion to check if each component are present on the screen.
    expect(
      screen.getByRole("button", {
        name: translator(language, "Pause Timer"),
      })
    ).toBeInTheDocument();

    // Assertion if  Start Timer button is not in the screen.
    expect(
      screen.queryByRole("button", {
        name: translator(language, "Start Timer"),
      })
    ).not.toBeInTheDocument();

     // Clicking in pause botton.

    const pauseButton = screen.getByRole("button",
        {name : translator(language, "Pause Timer")}
    )

    fireEvent.click(pauseButton)

    // Assertion if Pause Timer dissapeared and Start Timer appeared.

     expect(
      screen.queryByRole("button", {
        name: translator(language, "Pause Timer"),
      })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: translator(language, "Start Timer"),
      })
    ).toBeInTheDocument();

  });

// To check if the correct button appears when the time is zero.

    test("Assert restart,set timer and 'Done!' notification appear on timeout",
         () => {

    // Store Configuration.
    mockTimerValues = {
      totalSeconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };

    // Rendering the component.
    render(
        <Provider store={store}>
            <Timer expiryTimestamp={expiryTimestamp}/>
        </Provider>
    )

    // Assertion if set timer, reestart button and done notificacion appears.
    expect(screen.getByRole("heading",{
        name: translator(language,"Done!")
        }
    )).toBeInTheDocument()

     expect(screen.getByRole("button",{
        name: translator(language,"Set Time")
        }
    )).toBeInTheDocument()

     expect(screen.getByRole("button",{
        name: translator(language,"Restart Timer")
        }
    )).toBeInTheDocument()

     expect(screen.queryByRole("button",{
        name: translator(language,"Start Timer")
        }
    )).not.toBeInTheDocument()

     expect(screen.queryByRole("button",{
        name: translator(language,"Pause Timer")
        }
    )).not.toBeInTheDocument()

})   



  //-------------------------------------------------------------------------------------


});


test("Assert if reestart timer button works as expected", () => {

    // Store Configuration
    mockTimerValues = {
      totalSeconds: 60,
      seconds: 0,
      minutes: 1,
      hours: 0,
      days: 0,
    };


    // Render the compoenet.
    render(
        <Provider store={store}>
            <Timer expiryTimestamp={expiryTimestamp}/>
        </Provider>
    )

    // Assertion if the reestart button works.
    const restartButton = screen.getByRole("button",{
        name: translator(language,"Restart Timer")
        })
    
    mockRestart.mockClear();
    const clickTime = Date.now();

    fireEvent.click(restartButton);

    expect(mockRestart).toHaveBeenCalledTimes(1);
    expect(mockRestart).toHaveBeenCalledWith(expect.any(Date));

    const expiryTimestampAuxiliar = mockRestart.mock.calls[0][0] as Date;
    const initialSeconds = store.getState().time.initialSeconds;

    expect(expiryTimestampAuxiliar.getTime()).toBeGreaterThanOrEqual(
     clickTime + initialSeconds * 1000
    );

})

describe("To check if the timer show the correct values counting down",
    () => {
        test("Testing normal case -> 25:00 -> 24:59", () => {
        
        // Rendering the component and keeping rerender method
        const { rerender } = render(
            <Provider store={store}>
                <Timer expiryTimestamp={expiryTimestamp} />
            </Provider>
        );
        
        // updating the values of the timer manualy to simulate one second.
        mockTimerValues = {
        totalSeconds: 1499,
        seconds: 59,
        minutes: 24,
        hours: 0,
        days: 0,
        };

        // Re-rendering the component.

        rerender(
         <Provider store={store}>
            <Timer expiryTimestamp={expiryTimestamp} />
        </Provider>
        );

        // Assertion if the minutes and seconds changed correctly.
        expect(screen.getByLabelText("minutes")).toHaveTextContent("24");
        expect(screen.getByLabelText("seconds")).toHaveTextContent("59");

        })


        //-------------------------------------------------------------------------------------
   
    test("Checking border case -> 01:00 -> 00:59", () => {
        
         // Store configuration: setting time to 01:00
        mockTimerValues = {
        totalSeconds: 60,
        seconds: 0,
        minutes: 1,
        hours: 0,
        days: 0,
        };

        // Rendering the component and keeping rerender method
        const { rerender } = render(
            <Provider store={store}>
                <Timer expiryTimestamp={expiryTimestamp} />
            </Provider>
        );
        
        // updating the values of the timer manualy to simulate one second.
        mockTimerValues = {
        totalSeconds: 59,
        seconds: 59,
        minutes: 0,
        hours: 0,
        days: 0,
        };

        // Re-rendering the component.

        rerender(
         <Provider store={store}>
            <Timer expiryTimestamp={expiryTimestamp} />
        </Provider>
        );

        // Assertion if the minutes and seconds changed correctly.
        expect(screen.getByLabelText("minutes")).toHaveTextContent("00");
        expect(screen.getByLabelText("seconds")).toHaveTextContent("59");

        })
   

         //-------------------------------------------------------------------------------------
   
    test("Checking border case -> 60:00 -> 59:59", () => {
        
         // Store configuration: setting time to 01:00
        mockTimerValues = {
        totalSeconds: 3600,
        seconds: 0,
        minutes: 0,
        hours: 1,
        days: 0,
        };

        // Rendering the component and keeping rerender method
        const { rerender } = render(
            <Provider store={store}>
                <Timer expiryTimestamp={expiryTimestamp} />
            </Provider>
        );
        
        // updating the values of the timer manualy to simulate one second.
        mockTimerValues = {
        totalSeconds: 3599,
        seconds: 59,
        minutes: 59,
        hours: 0,
        days: 0,
        };

        // Re-rendering the component.

        rerender(
         <Provider store={store}>
            <Timer expiryTimestamp={expiryTimestamp} />
        </Provider>
        );

        // Assertion if the minutes and seconds changed correctly.
        expect(screen.getByLabelText("minutes")).toHaveTextContent("59");
        expect(screen.getByLabelText("seconds")).toHaveTextContent("59");

        })
   
    }
)




 //-------------------------------------------------------------------------------------





describe("To check the integration between Timer and TimerFixxer", () => {
  test("opens TimerFixer when Set Time is clicked", async () => {

    const { container } = render(
      <Provider store={store}>
        <Timer expiryTimestamp={expiryTimestamp} />
      </Provider>
    );

    expect(container.querySelector("#overlay")).not.toBeInTheDocument();
    expect(container.querySelector("#Content")).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: translator(language, "Set Time"),
      })
    );

    await waitFor(() => {
      expect(container.querySelector("#overlay")).toBeInTheDocument();
      expect(container.querySelector("#Content")).toBeInTheDocument();
    });
  });

  test("updates the background timer after accepting a changed time", async () => {
    mockTimerUpdatesOnRestart = true;
    const { container } = render(
      <Provider store={store}>
        <Timer expiryTimestamp={expiryTimestamp} />
      </Provider>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: translator(language, "Set Time"),
      })
    );

    fireEvent.click(
      await screen.findByRole("button", { name: "Increase seconds" })
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Aceept button" })
    );

    await waitForElementToBeRemoved(() => container.querySelector("#overlay"));

    expect(screen.getByLabelText("minutes")).toHaveTextContent("30");
    expect(screen.getByLabelText("seconds")).toHaveTextContent("01");
  });
});


