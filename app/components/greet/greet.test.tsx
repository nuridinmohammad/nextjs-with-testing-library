import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("Greet Component Rendered is", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello Guest");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("Greet Component Hello Nuridin via props", () => {
      render(<Greet text="Nuridin" />);
      const textElement = screen.getByText("Hello Nuridin");
      expect(textElement).toBeInTheDocument();
    });
  });
});
