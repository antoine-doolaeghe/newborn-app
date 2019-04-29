import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import NewbornRecordGraph from "../newbornRecordGraph";
import { renderWithReduxAndRouter } from "../../../utils/tests/integrations";

describe("<NewbornRecordGraph />", () => {
  afterEach(cleanup);
  it("should display the record child element", () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    const { getByTestId } = renderWithReduxAndRouter(
      <NewbornRecordGraph newbornInfoLoading={false} newbornInfo={{}} />
    );
    expect(getByTestId("newbornRecordGraph")).toBeTruthy();
  });
});
