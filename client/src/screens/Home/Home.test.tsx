import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Home", () => {
  it("renders Home page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const element = screen.getByText(/Recommended Courses for You/i);
    expect(element).toBeInTheDocument();
  });
});
