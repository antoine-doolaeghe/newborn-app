import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { MockedProvider } from "react-apollo/test-utils";
import gql from "graphql-tag";
import BuilderNewborn from "../builderNewborns";
import { updateNewborn } from "../../../../../graphql/mutations";

const API_MOCKS = [
  {
    request: {
      query: gql(updateNewborn),
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
  userNewborns: MOCK_NEWBORNS,
  trainerNewborns: [],
  refetch: jest.fn(),
  trainerId: "mockId"
};

describe("Builder Newborn List Component", () => {
  beforeEach(() => {
    cleanup();
  });
  it("should render the list of newborns", () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={API_MOCKS}>
        <BuilderNewborn {...props} />
      </MockedProvider>
    );
    expect(getAllByTestId("newborn_select_1_id")).toBeTruthy();
    expect(getAllByTestId("newborn_select_1_id")).toBeTruthy();
  });

  it("should render the list of ", () => {
    const { getByTestId } = render(
      <MockedProvider mocks={API_MOCKS}>
        <BuilderNewborn {...props} />
      </MockedProvider>
    );
    fireEvent.click(getByTestId("newborn_select_2_id"));
    fireEvent.click(getByTestId("builder_newborn_select_button"));
  });
});
