import React from "react";
import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import Home from "@/app/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Resume from "@/app/resume/page";

it("renders homepage", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it("renders About page", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

it("renders Projects page", () => {
  const { container } = render(<Projects />);
  expect(container).toMatchSnapshot();
});

it("renders Resume page", () => {
  const { container } = render(<Resume />);
  expect(container).toMatchSnapshot();
});
