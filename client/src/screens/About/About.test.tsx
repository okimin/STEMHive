import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { About } from "./About";

describe("About", () => {
  it("renders About page", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const element = screen.getByText(/Who are we/i);
    expect(element).toBeInTheDocument();
  });
});
