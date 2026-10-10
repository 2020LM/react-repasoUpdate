// Third-Party & Ecosystem Imports
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { FocusTimer } from "../focusTimer.tsx"
import { store } from "../../../../../store/store.ts"

test("Checking if all the elements are in the screen", () => {

    // Rendering the component.
    const { container } = render(
        <Provider store={store}>
            <FocusTimer />
        </Provider>
    )

    // Checking that all the element are in the screen.
    expect(screen.getAllByRole("heading")).toHaveLength(6)
    expect(container.querySelectorAll("ul")).toHaveLength(3)
    expect(container.querySelectorAll("li")).toHaveLength(12)
    expect(container.querySelectorAll("p")).toHaveLength(7)
})