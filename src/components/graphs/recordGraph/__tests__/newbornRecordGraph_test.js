import React from "react";
import "jest-dom/extend-expect";
import { cleanup, render } from "react-testing-library";
import NewbornRecordGraph from "../RecordGraph";

describe("<NewbornRecordGraph />", () => {
  afterEach(cleanup);
  it("should display the newborn record container", () => {
    const { getByTestId } = render(
      <NewbornRecordGraph newbornInfoLoading={false} newbornInfo={{}} />
    );
    expect(getByTestId("newbornRecordGraphContainer")).toBeTruthy();
  });

  it("should display the graph ranger selector", () => {
    const { getAllByTestId } = render(
      <NewbornRecordGraph newbornInfoLoading={false} newbornInfo={{}} />
    );
    expect(getAllByTestId("graphRangeButton")).toHaveLength(6);
  });

  it("should display a no training record message", () => {
    const { getByText } = render(
      <NewbornRecordGraph newbornInfoLoading={false} newbornInfo={{}} />
    );
    expect(getByText("No training record")).toBeTruthy();
  });
});
