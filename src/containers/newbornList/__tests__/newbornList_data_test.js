/* eslint-disable global-require */
import React from "react";
import "jest-dom/extend-expect";
import { cleanup, waitForElement } from "react-testing-library";
import NewbornList from "../newbornList";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

jest.mock("aws-amplify", () => {
  const { amplifyMock } = require("../../../utils/tests/aws-amplify_mock");
  return amplifyMock({
    data: {
      listGenerations: { items: [{}] },
      getGeneration: {
        newborns: {
          items: [
            {
              name: "he",
              id: "id",
              bornPlace: "unknown region"
            }
          ]
        }
      }
    }
  });
});

afterEach(cleanup);

test("should display the grid rows when a new newborn list has some observation", async () => {
  const { queryByTestId, queryAllByTestId } = renderWithReduxAndRouter(
    <NewbornList />,
    {
      initialState: {
        userReducer: {
          currentUserId: "1234"
        }
      }
    }
  );
  const wait = await waitForElement(() =>
    queryByTestId("newbornListContainer")
  );
  expect(wait).toBeTruthy();
  expect(queryByTestId("noBornIllustration")).toBeFalsy();
  expect(queryByTestId("newborn-card-list")).toBeTruthy();
  expect(queryAllByTestId("newbornCard")).toHaveLength(1);
  expect(queryAllByTestId("newbornCardPlaceholder")).toHaveLength(4);
});
