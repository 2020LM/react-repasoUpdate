// Third-Party & Ecosystem Imports
import {  render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";


// Architecture & Global State Imports
import store from "../../../../../store/store.ts"
import { translator } from "../../../../translator/translator.ts"
import {
  NATURE,
  ANIME,
  CAFE,
  CLASSICAL,
  JAZZ,
  RUNNING,
  INDIA,
  GRADIENTS,
  SOLIDS,
} from "../../../../../General/generalVariables.ts";

jest.unstable_mockModule("react-blurhash", () => ({
  Blurhash: () => null,
}));

const { Backgrounds } = await import("../backgrounds.tsx");

// Declaring global variables
const language = store.getState().language.currentLanguage.name

test("To check if background Images is loading properly" ,
    () => {
        // Rendering the component.
        const { container } = render(
            <Provider store={store}>
                <Backgrounds />
            </Provider>
        )

        // Checking if headings are on the screen.

        const headings = screen.getAllByRole("heading")
        expect(headings).toHaveLength(9)

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

        expect(screen.getByRole("heading",
            { name: translator(language,GRADIENTS)}
        ))

        expect(screen.getByRole("heading",
            { name: translator(language,SOLIDS)}
        ))
        
        // Checkin if the images are on the screen.
        const imgaes = container.querySelectorAll("img")
        expect(imgaes).toHaveLength(57)
    }
);
