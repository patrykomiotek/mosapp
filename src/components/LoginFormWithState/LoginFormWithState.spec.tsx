import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginFormWithState } from "./LoginFormWithState";

describe("LoginFormWithState component", () => {
  it("should validate form", () => {
    render(<LoginFormWithState />);

    const emailField = screen.getByLabelText(/e\-mail/i);
    // fireEvent.change(emailField, { target: { value: "asdvb" } });
    userEvent.type(emailField, "absd");

    expect(screen.getByText(/is invalid/i)).toBeInTheDocument();
  });
});
