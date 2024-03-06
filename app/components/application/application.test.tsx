import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const bioLabel =  screen.getByLabelText("Bio")
        expect(bioLabel).toBeInTheDocument()


        const inputLabel =  screen.getByLabelText("Name", {selector:"input"})
        expect(inputLabel).toBeInTheDocument()

        const selectLabel =  screen.getByLabelText("Name Country", {selector:"select"})
        expect(selectLabel).toBeInTheDocument()

        
    });
});