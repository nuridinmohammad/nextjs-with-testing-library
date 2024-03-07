import { getByRole, render, screen } from "@testing-library/react";
import { Skills } from "./skill";

describe("Skill", () => {
  const skills = ["HTML", "CSS", "Typescript"];
  test("renderers corectly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renderers a list of items", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills}/>)
    const loginButton = screen.getByRole("button", {name:"Login"})
    expect(loginButton).toBeInTheDocument()
  });

  test('not renders Start Learning button', () => {
    render(<Skills skills={skills}/>)
    const startLearningButton = screen.queryByRole("button", {name:"Start learning"})
    expect(startLearningButton).not.toBeInTheDocument()
  });
});
