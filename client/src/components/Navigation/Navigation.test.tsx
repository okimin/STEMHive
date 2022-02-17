import React from "react";
import { render, screen } from "@testing-library/react";

import { Navigation } from "./Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation", () => {
  it("renders navigation logo", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const logoElement = screen.getByText(/STEMHive/i);
    expect(logoElement).toBeInTheDocument();
  });
});
