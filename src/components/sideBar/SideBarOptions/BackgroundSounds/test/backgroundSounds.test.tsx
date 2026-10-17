// Third-Party & Ecosystem Imports
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

// Architecture & Global State Imports
import { store } from "../../../../../store/store.ts"

// Internal Tools & Utilities
import { translator } from "../../../../translator/translator.ts"
import { NATURE, ANIME, CAFE, CLASSICAL, JAZZ, RUNNING, INDIA } from "../../../../../General/generalVariables.ts";

// Local Components
import { BackgroundSounds } from "../view/backgroundSounds.tsx";


// Definin global variables.
const language = store.getState().language.currentLanguage.name

test("Checking if all the elements are in the screen", () => {

     // Rendering the Component.
    render(
        <Provider store={store}>
            <BackgroundSounds />
        </Provider>
    );

    // Checking that all the element are in the screen.

    expect(screen.getAllByRole("heading")).toHaveLength(8)
    expect(screen.getAllByRole("slider")).toHaveLength(23)

    expect(screen.getByRole("heading",
                { name: translator(language,NATURE)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,ANIME)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,CAFE)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,CLASSICAL)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,JAZZ)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,RUNNING)}
            ))
    
            expect(screen.getByRole("heading",
                { name: translator(language,INDIA)}
            ))

})
