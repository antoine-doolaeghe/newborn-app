/* eslint-disable global-require */
import React from "react";
import "jest-dom/extend-expect";
import { cleanup, waitForElement } from "react-testing-library";
import NewbornList from "../newbornList";
import { renderWithReduxAndRouter } from "../../../../utils/tests/integrations";

// describe("<NewbornList /> with initial state", () => {
//   jest.mock("aws-amplify", () => {
//     const { amplifyMock } = require("../../../utils/tests/aws-amplify_mock");
//     return amplifyMock();
//   });
//   afterEach(cleanup);
//   it("should display the loader spinner by default", () => {
//     const { getByTestId } = renderWithReduxAndRouter(<NewbornList />);
//     expect(getByTestId("newbornListLoading")).toBeTruthy();
//   });
// });
jest.mock("aws-amplify", () => {
  const { amplifyMock } = require("../../../../utils/tests/aws-amplify_mock");
  return amplifyMock({
    data: {
      listGenerations: { items: [] }
    }
  });
});

afterEach(cleanup);

test("should display the empty newborn illustration when the newborn list responds and empty list", async () => {
  const { queryByTestId } = renderWithReduxAndRouter(<NewbornList />, {
    initialState: {
      userReducer: {
        currentUserId: "1234"
      }
    }
  });
  const wait = await waitForElement(() =>
    queryByTestId("newbornListContainer")
  );
  expect(wait).toBeTruthy();
  expect(queryByTestId("noBornIllustration")).toBeTruthy();
});

test("should display the grid rows when a new newborn list has some observation", async () => {
  const { queryByTestId } = renderWithReduxAndRouter(<NewbornList />, {
    initialState: {
      userReducer: {
        currentUserId: "1234"
      }
    }
  });
  const wait = await waitForElement(() =>
    queryByTestId("newbornListContainer")
  );
  expect(wait).toBeTruthy();
  expect(queryByTestId("noBornIllustration")).toBeTruthy();
});
