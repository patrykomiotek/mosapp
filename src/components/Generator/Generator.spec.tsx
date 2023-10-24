import { render, screen, fireEvent } from "@testing-library/react";
import { Generator } from "./Generator";

describe("Generator component", () => {
  it("should generate new value each time after clicking on the button", () => {
    const { debug } = render(<Generator />);

    const id = screen.getByText(/[a-z0-9-]{32}/i).textContent;
    // console.log(id);

    // debug();
    fireEvent.click(screen.getByRole("button"));

    const newId = screen.getByText(/[a-z0-9-]{32}/i).textContent;

    expect(newId).not.toBe(id);
  });
});
