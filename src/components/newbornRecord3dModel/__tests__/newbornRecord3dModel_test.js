import React from "react";
import "jest-dom/extend-expect";
import { cleanup, render } from "react-testing-library";
import NewbornRecord3dModel from "../newbornRecord3dModel";

describe("<NewbornRecordGraph />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    const { getByTestId } = render(<NewbornRecord3dModel />);
    expect(getByTestId("newbornRecord3dModel")).toBeTruthy();
  });
});
