import React from "react";
import "jest-dom/extend-expect";
import { cleanup, render } from "react-testing-library";
import NewbornRecordHeader from "../newbornRecordHeader";

describe("<NewbornHeader />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByTestId, debug } = render(<NewbornRecordHeader />);
    debug();
    expect(getByTestId("newbornRecordHeader")).toBeTruthy();
  });
});
