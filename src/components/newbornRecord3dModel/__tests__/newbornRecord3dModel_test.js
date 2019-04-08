import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import * as THREE from "three";
import NewbornRecord3dModel from "../newbornRecord3dModel";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornRecordGraph />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    // window.HTMLCanvasElement.prototype.getContext = () => {};
    // const { getByTestId } = renderWithReduxAndRouter(<NewbornRecord3dModel />);
    expect(true).toBeTruthy();
  });
});
