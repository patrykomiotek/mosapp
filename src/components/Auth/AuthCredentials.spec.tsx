import { render, screen, fireEvent } from "@testing-library/react";

import { AuthCredentials } from "./AuthCredentials";
import { AuthContextProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should toggle value", () => {
    render(
      <AuthContextProvider>
        <AuthCredentials />
      </AuthContextProvider>
    );
    expect(screen.getByText(/no/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
  });
});
