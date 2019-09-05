import React from "react";
import { render } from "react-testing-library";
import { Text } from "../index";

describe("Text Component", () => {
  it("should render", () => {
    const { getByText } = render(<Text>Text</Text>);
    expect(getByText("Text")).toBeTruthy();
  });
});
