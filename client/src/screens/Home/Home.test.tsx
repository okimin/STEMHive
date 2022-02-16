import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("renders Home page", () => {
    render(<Home />);
    const element = screen.getByText(/Learn React/i);
    expect(element).toBeInTheDocument();
  });
});
