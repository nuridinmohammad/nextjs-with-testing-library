import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const element = screen.getByTestId('custom-element')
        expect(element).toBeInTheDocument()
    });
});