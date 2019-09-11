import React from "react";
import { render } from "react-testing-library";
import BuilderNewbornList from "../builderNewbornList";

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
  remove: jest.fn()
};

describe("Builder Newborn List Component", () => {
  it("should render the list of newborns chips", () => {
    const { getAllByTestId } = render(<BuilderNewbornList {...props} />);
    getAllByTestId("builder_newborn_1_id");
    getAllByTestId("builder_newborn_2_id");
  });

  it("should render a placeholder when there is no list content", () => {
    props.newborns = [];
    const { getByText } = render(<BuilderNewbornList {...props} />);
    getByText("No newborn to train");
  });
});
