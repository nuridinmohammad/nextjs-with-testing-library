import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const headingElemenetH1 = screen.getByRole("heading",{level:1})
        expect(headingElemenetH1).toBeInTheDocument()


        const headingElemenetH2 = screen.getByRole("heading", {name:'Section 1'})
        expect(headingElemenetH2).toBeInTheDocument()

        const nameELement = screen.getByRole("textbox",{
            name:"Name"
        })
        expect(nameELement).toBeInTheDocument()


        const bioELement = screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioELement).toBeInTheDocument()


        const jobLocation = screen.getByRole("combobox")
        expect(jobLocation).toBeInTheDocument()


        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()


        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeInTheDocument()
    });
});