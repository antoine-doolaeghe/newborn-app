import React from "react";
import { fireEvent, cleanup, render } from "react-testing-library";
import { Router } from "react-router-dom";
import NewbornCard from "../newbornCard";
import { createMemoryHistory } from "history";

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

describe("<NewbornCard />", () => {
  afterEach(cleanup);
  it("should display the correct newborn card name", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByText } = render(
      <NewbornCard newbornName="newbornName" newbornSummaries={{}} />
    );
    expect(getByText("newbornName")).toBeTruthy();
  });

  it("should display the corrent newborn card born place", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByText } = render(
      <NewbornCard newbornPlace="newbornPlace" newbornSummaries={{}} />
    );
    expect(getByText("newbornPlace")).toBeTruthy();
  });

  it("should be own by the user click on the buy button", () => {
    const { getByTestId } = renderWithRouter(
      <NewbornCard
        newbornPlace="newbornPlace"
        newbornName="newbornName"
        newbornSummaries={{}}
        handleNewbornSelect={jest.fn()}
      />
    );

    expect(getByTestId("newbornBuyButton")).toBeTruthy();
  });
});
