import React from "react";
import "jest-dom/extend-expect";
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

  it("should call handleNewbornSelect if the user mouse select a newborn card", () => {
    const handleNewbornSelect = jest.fn();
    const { getByTestId } = renderWithRouter(
      <NewbornCard
        newbornPlace="newbornPlace"
        newbornName="newbornName"
        newbornSummaries={{}}
        handleNewbornSelect={handleNewbornSelect}
      />
    );

    fireEvent.click(getByTestId("newbornCard"));

    expect(handleNewbornSelect).toHaveBeenCalledTimes(1);
  });

  it("should call handleNewbornHover if the user mouse hover a newborn card", () => {
    const handleNewbornHover = jest.fn();
    const { getByTestId } = renderWithRouter(
      <NewbornCard
        newbornPlace="newbornPlace"
        newbornName="newbornName"
        newbornSummaries={{}}
        handleNewbornSelect={jest.fn()}
        handleNewbornHover={handleNewbornHover}
      />
    );

    fireEvent.mouseEnter(getByTestId("newbornCard"));

    expect(handleNewbornHover).toHaveBeenCalledTimes(1);
  });

  it("should be highlighted if the card is owned by the current user", () => {
    const { getByTestId } = renderWithRouter(
      <NewbornCard newbornSummaries={{}} isCurrentUserOwnership={true} />
    );
    expect(getByTestId("newbornCard")).toHaveStyle(`background-color: red`);
  });
});
