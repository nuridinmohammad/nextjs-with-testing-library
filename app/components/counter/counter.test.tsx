import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./counter";

// MOCK TESTING
describe("Mock Testing of Counter", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButtonElement = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementButtonElement);
    await user.click(decrementButtonElement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
