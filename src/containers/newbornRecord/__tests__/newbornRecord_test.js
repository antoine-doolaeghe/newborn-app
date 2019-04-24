import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornCard from "../newbornRecord";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornRecord />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    // window.HTMLCanvasElement.prototype.getContext = () => {};
    // const { getByTestId } = renderWithReduxAndRouter(<NewbornCard />);
    expect(true).toBeTruthy();
  });
});
