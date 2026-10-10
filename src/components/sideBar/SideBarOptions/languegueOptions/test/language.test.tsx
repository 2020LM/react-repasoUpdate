// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";

// Architecture & Global State Imports
import { LanguagueOptions } from "../language.tsx"
import { store } from "../../../../../store/store.ts"

test("Checking if all the elements are in the screen", () => {

    // Rendering the component.
    const { container } = render(
        <Provider store={store}>
            <LanguagueOptions />
        </Provider>
    )

    // Checking that all the element are in the screen.
    expect(screen.getAllByRole("heading")).toHaveLength(1)
    expect(container.querySelectorAll("ul")).toHaveLength(1)
    expect(container.querySelectorAll("li")).toHaveLength(4)

})

test("To check if when user clicks one language, the heading gets translated", 
    () => {

    // Rendering the component.
    render(
        <Provider store={store}>
            <LanguagueOptions />
        </Provider>
    )
    
    const languages = ["Español","português","हिंदी"]
    const translations = ["Lenguajes","Línguas","भाषाएँ"]

    for(let i = 0; i < languages.length; i++){

    const language = languages[i]
        
        fireEvent.click(screen.getByRole("button", {
        name: language
    }))

    expect(screen.getByRole("heading")).
    toHaveTextContent(RegExp(translations[i]))

    // Checking if the check appears beside of the selected language
    expect(screen.getByRole("img", {
        name: RegExp(language)
    })).toBeInTheDocument()
    }

})