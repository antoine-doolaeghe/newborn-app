import React from "react";
import { render, cleanup } from "react-testing-library";
import BuilderNewbornSelect from "../builderNewbornSelect";

const MOCK_NEWBORNS = [
  {
    name: "newborn1",
    id: "1"
  },
  {
    name: "newborn2",
    id: "2"
  }
];

const props = {
  newborns: MOCK_NEWBORNS,
  add: jest.fn()
};

describe("Builder Newborn Select Component", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render the list of newborns", () => {
    const { getByText } = render(<BuilderNewbornSelect {...props} />);
    getByText("newborn1");
    getByText("newborn2");
  });

  it("should render the add newborn button", () => {
    const { getByTestId } = render(
      <BuilderNewbornSelect {...props} />
    );
    getByTestId("builder_newborn_select_button");
  });
});
