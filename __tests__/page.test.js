import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import Home from "@/app/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Resume from "@/app/resume/page";

describe("Home", () => {
  it("renders all components", () => {
    render(<Home />);

    // check for <header> in <Header />
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    // check for <text> in <Text />
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders all components", () => {
    render(<About />);

    // check for <header> in <Header />
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    // check for p1, ul1, p2 in <Text />
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("renders all components", () => {
    render(<Projects />);

    // check for <header> in <Header />
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    // check for text in <Text />
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });
});

describe("Resume", () => {
  it("renders all components", () => {
    render(<Resume />);

    // check for pdf in <Resume_PDF />
    const pdf = screen.getByTestId("pdf");
    expect(pdf).toBeInTheDocument();
  });
});
