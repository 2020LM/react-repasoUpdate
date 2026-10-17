// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";

// Architecture & Global State Imports
import store from "../../../store/store.ts";
import { setVisibleSideBar } from "../../../store/slices/SideBar/SideBarSlice.js";

// Local Components
import { HamburgerMenu } from "../view/hamburgerMenu.tsx";


// Mock SideBar's dependencies before importing it.
jest.unstable_mockModule("../../sideBar/view/sideBarContent.tsx", () => ({
    SideBarContent: () => null,
}));

jest.unstable_mockModule("react-custom-scrollbars", () => ({
    Scrollbars: ({ children }: { children: React.ReactNode }) => children,
}));

const { SideBar } = await import("../../sideBar/view/sideBar.tsx");

test("Checking if hamburger menu button appears properly.", () => {

    // Rendering the component.
    render(
        <Provider store={store}>
            <HamburgerMenu />
        </Provider>
    );

    // Asserting if hamburgerMenu is in the screen.
    expect(
        screen.getByRole("button", { name: /^Open sidebar menu$/i })
    ).toBeInTheDocument();
});

test("opens the sidebar when the hamburger menu is clicked", async () => {

    // Store Configuration.
    store.dispatch(setVisibleSideBar(false));

    // rendering the component.
    render(
        <Provider store={store}>
            <HamburgerMenu />
            <SideBar />
        </Provider>
    );

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open sidebar menu" }));

    // Assertion if sideBar is on the screen after clicking the hamburger Menu.
    expect(await screen.findByRole("navigation")).toBeInTheDocument();
});

test("closes the sidebar when its close button is clicked", async () => {

    // Store Configuration.
    store.dispatch(setVisibleSideBar(true));

    // rendering the component.
    render(
        <Provider store={store}>
            <HamburgerMenu />
            <SideBar />
        </Provider>
    );

    // Selecting the respective element and making operations
    const sidebar = await screen.findByRole("navigation");
    fireEvent.click(screen.getByRole("button", { name: "Close sidebar" }));

    await waitForElementToBeRemoved(sidebar);

    // Making asserion if the element is not in the screen.
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
});