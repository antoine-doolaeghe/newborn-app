import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornRecordHeader from "../newbornRecordHeader";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornHeader />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByTestId } = renderWithReduxAndRouter(<NewbornRecordHeader />);
    expect(getByTestId("newbornRecordHeader")).toBeTruthy();
  });
});
