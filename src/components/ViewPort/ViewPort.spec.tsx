import { render, screen } from "@testing-library/react";

import { ViewPort } from "./ViewPort";
import { useViewPort } from "../../hooks/useViewPort";

// jest.mock("../../hooks/useViewPort", () => {
//   return {
//     useViewPort: () => ({
//       x: 123,
//       y: 567,
//     }),
//   };
// });

jest.mock("../../hooks/useViewPort", () => {
  const currentImplementation = jest.requireActual("../../hooks/useViewPort");
  return {
    ...currentImplementation,
    useViewPort: jest.fn(),
  };
});

const mockedUseViewPort = useViewPort as jest.Mock;

describe("ViewPort component", () => {
  it("should display default values", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 1024, y: 768 }));
    const { debug } = render(<ViewPort />);
    expect(screen.getByText(/X: 1024, Y: 768/i)).toBeInTheDocument();
  });
  it("should use mocked hook values", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 33, y: 55 }));
    render(<ViewPort />);
    expect(screen.getByText(/X: 33, Y: 55/i)).toBeInTheDocument();
  });
});
