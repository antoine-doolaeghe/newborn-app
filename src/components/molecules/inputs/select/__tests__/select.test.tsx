import React from "react";
import { render } from "react-testing-library";
import { Select } from "../index";
import { ISelectProps } from "../select";

const props: ISelectProps = {
  id: "select_test_id",
  disabled: true,
  disabledLabel: "label",
  onChange: jest.fn(),
  options: ["test1", "test2"]
};

describe("Select Component", (): void => {
  it("should helper text when disbaled", () => {
    const { getByText, debug } = render(<Select {...props} />);
    expect(getByText("label")).toBeTruthy();
  });
});
