import React from "react";
import { render } from "react-testing-library";
import { DeleteLevelButton } from "../index";
import { MockedProvider } from "react-apollo/test-utils";
import {
  IDeleteLevelButtonProps,
  DELETE_TRAINING_LEVEL
} from "../deleteLevelButton";

const API_MOCKS = [
  {
    request: {
      query: DELETE_TRAINING_LEVEL,
      variables: {
        newbornTrainerId: "test-id"
      }
    },
    result: {
      data: {
        dog: { id: "1", name: "Buck", breed: "bulldog" }
      }
    }
  }
];

const props: IDeleteLevelButtonProps = {
  id: "testId",
  refetch: jest.fn()
};

describe("Create level Button Component", (): void => {
  it("should render the button label", () => {
    const { getByText } = render(
      <MockedProvider mocks={API_MOCKS}>
        <DeleteLevelButton {...props} />
      </MockedProvider>
    );
    expect(getByText("Delete")).toBeTruthy();
  });
});
