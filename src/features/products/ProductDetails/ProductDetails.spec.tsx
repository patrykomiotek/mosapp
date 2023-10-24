import { render, screen } from "@testing-library/react";
import { ProductDetails } from "./ProductDetails";

describe("ProductDetails component", () => {
  it("should display indication", () => {
    render(<ProductDetails id="123" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display one product", async () => {
    render(<ProductDetails id="123" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await screen.findByText(/Product1/i);
  });
});
