import React from "react";
import { fireEvent, cleanup, render } from "react-testing-library";
import NewbornCard from "../newbornCard";

describe("<NewbornCard />", () => {
  afterEach(cleanup);
  it("should render a card", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const { getByText } = render(
      <NewbornCard newbornName="newbornName" newbornSummaries={{}} />
    );
    getByText("newbornName");
  });
});
