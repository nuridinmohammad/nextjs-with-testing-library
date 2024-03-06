import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const paragraphELement = screen.getByText("All fields are mandatory", {selector:"span"})
        expect(paragraphELement).toBeInTheDocument()
    });
});