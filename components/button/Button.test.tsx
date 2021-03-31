import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { Primary } from "./Button.stories";

it("renders the button in the primary state", () => {
  render(<Primary {...Primary.args} />);
  fireEvent.click(screen.getByText("Button"));

  expect(screen.getByRole("button")).toHaveTextContent("Button");
});
