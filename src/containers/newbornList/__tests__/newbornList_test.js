import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornList from "../newbornList";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

jest.mock("aws-amplify-react", () => {
  return {
    withAuthenticator: component => {
      return component;
    }
  };
});

describe("<NewbornList />", () => {
  afterEach(cleanup);
  it("should display the correct newborn card name", () => {
    const initialState = {
      newbornList: [
        {
          id: "test"
        }
      ],
      newbornListLoading: false
    };
    const { getByTestId } = renderWithReduxAndRouter(
      <NewbornList />,
      initialState
    );
    expect(getByTestId("newbornListLoading")).toBeTruthy();
  });
});
