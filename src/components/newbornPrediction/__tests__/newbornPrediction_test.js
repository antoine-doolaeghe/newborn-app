import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornPrediction from "../newbornPrediction";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornRecordGraph />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByTestId } = renderWithReduxAndRouter(<NewbornPrediction />);
    expect(getByTestId("newbornRecordPrediction")).toBeTruthy();
  });
});
