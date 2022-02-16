import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders About page", () => {
    render(<About />);
    const element = screen.getByText(/Who are we/i);
    expect(element).toBeInTheDocument();
  });
});
