// Third-Party & Ecosystem Imports
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";

// Architecture & Global State Imports
import {
    setRightArrow,
    setVisibleSideBar,
} from "../../../store/slices/SideBar/SideBarSlice.js";
import { store } from "../../../store/store.js";
import { Provider } from "react-redux";
import { translator } from "../../translator/translator.js";

jest.unstable_mockModule("react-blurhash", () => ({
    Blurhash: () => null,
}));

const { SideBar } = await import("../sideBar.js");

// Defining global values:
const language = store.getState().language.currentLanguage.name;

test("Checking that all the element of the sideBar is on the screen",
    () => {

    // Store Configuration.
    store.dispatch(setVisibleSideBar(true));
    store.dispatch(setRightArrow(true));
    
     // rendering the component.
    const { container } = render(
        <Provider store={store}>
            <SideBar/>
        </Provider>
        );

    // Assertion if the respective sideBar elements are on the screen.
    expect(
        screen.getByRole("button",{name: "Close sidebar"})
    ).toBeInTheDocument()

     expect(
        screen.getByRole("button",{name: "Back to main menu"})
    ).toBeInTheDocument()

    expect(container.querySelector("#collapseExample1")).toBeInTheDocument();


    }

);

test("shows the selected carousel section and returns to the menu", async () => {
    store.dispatch(setVisibleSideBar(true));
    store.dispatch(setRightArrow(false));

    const { container } = render(
        <Provider store={store}>
            <SideBar />
        </Provider>
    );

    const carouselItems = container.querySelectorAll(
        "#carouselExampleControls .carousel-item"
    );
    expect(carouselItems).toHaveLength(6);
    expect(carouselItems[0]).toHaveClass("active");

    const menuOptions = [
        { label: "Change Background", slideIndex: 1 },
        { label: "Set Alarm", slideIndex: 2 },
        { label: "Set Music", slideIndex: 3 },
        { label: "Set Language", slideIndex: 4 },
        { label: "Focus Timer", slideIndex: 5 },
    ];

    for (const { label, slideIndex } of menuOptions) {
        fireEvent.click(
            screen.getByRole("button", {
                name: translator(language, label),
            })
        );

        await waitFor(() => {
            expect(carouselItems[slideIndex]).toHaveClass("active");
            expect(container.querySelectorAll(".carousel-item.active")).toHaveLength(1);
        });

        fireEvent.click(
            await screen.findByRole("button", { name: "Back to main menu" })
        );

        await waitFor(() => {
            expect(carouselItems[0]).toHaveClass("active");
            expect(container.querySelectorAll(".carousel-item.active")).toHaveLength(1);
        });
    }
})