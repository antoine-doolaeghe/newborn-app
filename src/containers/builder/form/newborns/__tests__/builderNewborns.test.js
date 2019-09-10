import React from "react";
import { render } from "react-testing-library";
import { MockedProvider } from "react-apollo/test-utils";
import gql from "graphql-tag";
import BuilderNewborn from "../builderNewborns";
import { updateNewborn } from "../../../../../graphql/mutations";

const API_MOCKS = [
  {
    request: {
      query: gql(updateNewborn),
      variables: {
        name: "test-id"
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
  it("should the list of newborns", () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={API_MOCKS}>
        <BuilderNewborn {...props} />
      </MockedProvider>
    );
    getAllByTestId("newborn_select_1_id");
    getAllByTestId("newborn_select_1_id");
  });
});
