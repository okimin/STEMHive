import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
  it("renders navigation logo", () => {
    render(<Navigation />);
    const logoElement = screen.getByText(/STEMHive/i);
    expect(logoElement).toBeInTheDocument();
  });
});
