import React from "react";
import { render } from "react-testing-library";
import BuilderNewborns from "../builderNewborns";

describe("Badge Component", () => {
  it("should render", () => {
    const { debug } = render(<BuilderNewborns label="label" />);
    // debug();
    // expect(getByText("label")).toBeTruthy();
  });
});
