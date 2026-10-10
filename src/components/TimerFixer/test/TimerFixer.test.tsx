// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store.ts";

// Architecture & Global State Imports
import { TimerFixer } from "../TimerFixer.js";
import { setFixingTimer } from "../../../store/slices/Time/TimeSlice.ts";

describe("Testing component mounting and unmounting" , () => {
test("renders the overlay and content when the modal is open", () => {

  // Fixing the store for testing purposes.
  store.dispatch(setFixingTimer(true));

  // Rendering the component.
  const { container } = render(
    <Provider store={store}>
      <TimerFixer />
    </Provider>
  );

 // Assertion if the relevant elements are on the screen
 expect(container.querySelector("#overlay")).toBeInTheDocument();
 expect(container.querySelector("#Content")).toBeInTheDocument();

});

test("closes the modal after accepting the selected time", async () => {

    // Fixing the store for testing purposes.
    store.dispatch(setFixingTimer(true));

    // Rendering the component.
    const { container } = render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
    )

    // Selecting the relevant elements and making operations with them.

    const acceptButton = screen.getByRole("button", { name: "Aceept button" });
    fireEvent.click(acceptButton);
    await waitForElementToBeRemoved(() => container.querySelector("#overlay"));

    // Assertion if the relevant elements are not on the screen
    expect(container.querySelector("#overlay")).not.toBeInTheDocument()
    expect(container.querySelector("#Content")).not.toBeInTheDocument()

})

test("closes the modal when the close button is clicked", async () => {

     // Fixing the store for testing purposes.
    store.dispatch(setFixingTimer(true));

    // Rendering the component.
    const { container } = render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
    )

    // Selecting the relevant elements and making operations with them.
    const closeModal = screen.getByRole("button", { name: "Close Modal" });
    fireEvent.click(closeModal);
    await waitForElementToBeRemoved(() => container.querySelector("#overlay"));

    // Assertion if the relevant elements are not on the screen
    expect(container.querySelector("#overlay")).not.toBeInTheDocument()
    expect(container.querySelector("#Content")).not.toBeInTheDocument()

})

})

describe("Checking if the arrows moves the numbers on the screen properly" , () => {
    describe("Cheking the arrowsUp" , () => {
        test("increments the tens-of-minutes digit when the first up arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const increaseButton = screen.getByRole("button", {
            name: "Increase tens of minutes",
        });

        fireEvent.click(increaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Tens of minutes"})).toHaveValue("4")

        // Checking if when we arrive to 9 in the screen, it reestar to 0.
        for (let i = 0; i < 6; i++) {
          fireEvent.click(increaseButton);
        }

        expect(screen.getByRole("textbox", {name: "Tens of minutes"})).toHaveValue("0")

        })


        //-------------------------------------------------------------------------------------

        test("increments the minutes digit when the second up arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const increaseButton = screen.getByRole("button", {
            name: "Increase minutes",
        });

        fireEvent.click(increaseButton);

        // Checking if arrow increment the number by one
        expect(screen.getByRole("textbox", {name: "Minutes"})).toHaveValue("1")

        // Checking if when we arrive to 9 in the screen, it reestar to 0.
        for (let i = 0; i < 9; i++) {
          fireEvent.click(increaseButton);
        }

        expect(screen.getByRole("textbox", {name: "Minutes"})).toHaveValue("0")

        })


       
        //-------------------------------------------------------------------------------------


 test("increments the tens-of-seconds digit when the third up arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const increaseButton = screen.getByRole("button", {
            name: "Increase tens of seconds",
        });

        fireEvent.click(increaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Ten of Seconds"})).toHaveValue("1")

        // Checking if when we arrive to 6 in the screen, it reestar to 0.
        for (let i = 0; i < 5; i++) {
          fireEvent.click(increaseButton);
        }

        expect(screen.getByRole("textbox", {name: "Ten of Seconds"})).toHaveValue("0")

        })




        //-------------------------------------------------------------------------------------
   

     test("increments the seconds digit when the fourth up arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const increaseButton = screen.getByRole("button", {
            name: "Increase seconds",
        });

        fireEvent.click(increaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Seconds"})).toHaveValue("1")

        // Checking if when we arrive to 9 in the screen, it reestar to 0.
        for (let i = 0; i < 9; i++) {
          fireEvent.click(increaseButton);
        }

        expect(screen.getByRole("textbox", {name: "Seconds"})).toHaveValue("0")

        })

    })




    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------




    describe("Cheking the arrowsDown" , () => {
        test("increments the tens-of-minutes digit when the first down arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const decreaseButton = screen.getByRole("button", {
            name: "Decrease tens of minutes",
        });

        fireEvent.click(decreaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Tens of minutes"})).toHaveValue("2")

        // Checking if when we arrive to 9 in the screen, it reestar to 0.
        for (let i = 0; i < 3; i++) {
          fireEvent.click(decreaseButton);
        }

        expect(screen.getByRole("textbox", {name: "Tens of minutes"})).toHaveValue("9")

        })


        //-------------------------------------------------------------------------------------

        test("increments the minutes digit when the second down arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const decreaseButton = screen.getByRole("button", {
            name: "Decrease minutes",
        });

        fireEvent.click(decreaseButton);

        // Checking if arrow increment the number by one
        expect(screen.getByRole("textbox", {name: "Minutes"})).toHaveValue("9")

        })


       
        //-------------------------------------------------------------------------------------


 test("increments the tens-of-seconds digit when the third down arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const decreaseButton = screen.getByRole("button", {
            name: "Decrease tens of seconds",
        });

        fireEvent.click(decreaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Ten of Seconds"})).toHaveValue("5")

        })




        //-------------------------------------------------------------------------------------
   

     test("increments the seconds digit when the fourth down arrow is clicked", () => {
        
        // Fixing the store for testing purposes.
        store.dispatch(setFixingTimer(true));

        // Rendering the component
        render(
        <Provider store={store}>
            <TimerFixer />
        </Provider>
            );
        
        // Selecting the respective elements
        const decreaseButton = screen.getByRole("button", {
            name: "Decrease seconds",
        });

        fireEvent.click(decreaseButton);

        // Checking if arrow increment the ten of number by one
        expect(screen.getByRole("textbox", {name: "Seconds"})).toHaveValue("9")

        })

    })
})
