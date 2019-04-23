import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import MyBorn from "../myBorn";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornList />", () => {
  afterEach(cleanup);
  it("init test", () => {
    expect(true).toBeTruthy();
  });
});
