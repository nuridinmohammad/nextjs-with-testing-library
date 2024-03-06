import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const alternativeAttrImg = screen.getByAltText("a person with a laptop image")
        expect(alternativeAttrImg).toBeInTheDocument()

        const alternativeAttrInput = screen.getByAltText("a person with a laptop input")
        expect(alternativeAttrInput).toBeInTheDocument()

        const alternativeAttrArea = screen.getByAltText("a person with a laptop area")
        expect(alternativeAttrArea).toBeInTheDocument()


    });
});