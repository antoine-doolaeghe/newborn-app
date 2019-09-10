import React from "react";
import { render } from "react-testing-library";
import BuilderNewbornList from "../newbornList";

describe("Badge Component", () => {
  it("should render", () => {
    const { debug } = render(<BuilderNewbornList label="label" />);
    // expect(getByText("label")).toBeTruthy();
  });
});
