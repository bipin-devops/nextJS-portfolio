import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";
jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  // tests heading h1 that contains name
  it("renders a heading", () => {
    render(<Home name="Bipin" />);

    const heading = screen.getByRole("heading", {
      name: "Bipin",
    });

    expect(heading).toBeInTheDocument();
  });

  //   tests div that contains description
  it("renders a description", () => {
    render(<Home summary="My Summary" />);

    const summary = screen.getByText("My Summary");

    expect(summary).toBeInTheDocument();
  });
});
