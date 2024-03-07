import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('Application component rendered', () => {
        render(<Application/>)

       const titleAttr = screen.getByTitle("Close", {})
       expect(titleAttr).toBeInTheDocument()

       const title = screen.getByText("x", {selector:"title"})
       expect(title).toBeInTheDocument()

    });
});