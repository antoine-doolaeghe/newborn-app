import React from "react";
import { render } from "react-testing-library";
import { Badge } from "../index";
import { IBadgeProps } from "../badge";

const props: IBadgeProps = {
  label: "label",
  width: "20px",
  height: "20px"
};

describe("Badge Component", (): void => {
  it("should render the label", () => {
    const { getByText } = render(<Badge {...props} />);
    expect(getByText("label")).toBeTruthy();
  });
});
