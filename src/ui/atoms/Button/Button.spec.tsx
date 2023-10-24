import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button component", () => {
  it("should render corectly ;)", () => {
    const { debug } = render(<Button label="Click me" />);
    // debug();
    const node = screen.getByText("Click me");
    expect(node).toBeInTheDocument();
  });

  // it.todo("should render correctly ;)");
  // it.only("should render correctly ;) #2");
  // it.skip("should render correctly ;) #3", () => {});
});
