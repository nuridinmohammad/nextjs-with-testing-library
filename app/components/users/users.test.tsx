import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe("Users", () => {
  test("renders correctly", async () => {
    render(<Users />);
    const textELement = screen.getByRole("heading", { name: "Users" });
    expect(textELement).toBeInTheDocument();

    const textError = screen.queryByRole("paragraph", {
      name: "Error fetching users",
    });
    expect(textError).not.toBeInTheDocument();

    const listELement = screen.getByRole("list");
    expect(listELement).toBeInTheDocument();

    const listItemELement = screen.queryByRole("listitem");
    expect(listItemELement).not.toBeInTheDocument();
  });

  test("should renders list of item", async () => {
    render(<Users />);
    const listItemELement = await screen.findAllByRole("listitem");
    expect(listItemELement).toHaveLength(10);
  });
});
