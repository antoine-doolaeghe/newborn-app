import React from "react";
import "jest-dom/extend-expect";
import { cleanup, render } from "react-testing-library";
import NewbornCardHeader from "../newbornCardHeader";

describe("<NewbornCardHeader />", () => {
  afterEach(cleanup);
  it("should display the correct title", () => {
    const { getByText } = render(<NewbornCardHeader title="title" />);
    expect(getByText("title")).toBeTruthy();
  });

  it("should display the correct sub title", () => {
    const { getByText } = render(<NewbornCardHeader subTitle="subTitle" />);
    expect(getByText("subTitle")).toBeTruthy();
  });
});
