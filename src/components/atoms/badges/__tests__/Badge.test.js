import React from "react";
import { render } from "react-testing-library";
import { Badge } from "../index";

describe("Badge Component", () => {
  it("should render", () => {
    const { getByText } = render(<Badge label="label" />);
    expect(getByText("label")).toBeTruthy();
  });
});
