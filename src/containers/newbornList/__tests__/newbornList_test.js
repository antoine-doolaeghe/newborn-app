import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornList from "../newbornList";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornList />", () => {
  afterEach(cleanup);
  it("should display the correct newborn card name", () => {
    const { getByTestId } = renderWithReduxAndRouter(<NewbornList />, {
      initialState: {
        userReducer: {
          currentUserId: "1234"
        }
      }
    });
    expect(getByTestId("newbornListLoading")).toBeTruthy();
  });
});
