import React from "react";
import { render } from "react-testing-library";
import { CreateLevelButton } from "../index";
import { MockedProvider } from "react-apollo/test-utils";
import { ICreateLevelProps, CREATE_TRAINING_LEVEL } from "../createLevelButton";

const API_MOCKS = [
  {
    request: {
      query: CREATE_TRAINING_LEVEL,
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

const props: ICreateLevelProps = {
  trainerId: "testId",
  refetch: jest.fn()
};

describe("Create level Button Component", (): void => {
  it("should render the button label", () => {
    const { getByText } = render(
      <MockedProvider mocks={API_MOCKS}>
        <CreateLevelButton {...props} />
      </MockedProvider>
    );
    expect(getByText("Create Level button")).toBeTruthy();
  });
});
