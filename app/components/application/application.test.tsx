import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

        const placeholderUsername = screen.getByPlaceholderText('Username')
        expect(placeholderUsername).toBeInTheDocument()
        
    });
});