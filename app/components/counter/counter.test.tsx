import { render, screen } from "@testing-library/react";
import event from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();
    const amountElement = screen.getByRole("heading", { level: 2 });
    expect(amountElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeInTheDocument();
    const setButton = screen.getByRole("button", { name: "Set" });
    expect(setButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    event.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await event.click(incrementButton);
    await event.click(incrementButton);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a amount of 10 after clicking the Set button", async () => {
    event.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await event.type(amountInput, "10")
    expect(amountInput).toHaveValue(10)
    const setButton  = screen.getByRole("button", {name:"Set"})
    await event.click(setButton)
    const amountElement = screen.getByRole("heading", { level: 2 });
    expect(amountElement).toHaveTextContent("10")
  });

  test('elements are focused in the right order', async() => {
    event.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole("button",{name:"Increment"})
    const amountInput = screen.getByRole("spinbutton")
    const amountInputs = screen.getByRole("button", {name:"Increments"})
    const setButton = screen.getByRole("button", {name:"Set"})
   
    await event.tab()
    expect(incrementButton).toHaveFocus()

    await event.tab()
    expect(amountInput).toHaveFocus()


    await event.tab()
    expect(amountInputs).toHaveFocus()


    await event.tab()
    expect(setButton).toHaveFocus()
  });
});
