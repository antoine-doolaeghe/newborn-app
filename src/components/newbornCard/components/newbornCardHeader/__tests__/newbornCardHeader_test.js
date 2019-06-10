import React from "react";
import "jest-dom/extend-expect";
import { cleanup } from "react-testing-library";
import { renderWithReduxAndRouter } from "../../../../../utils/tests/integrations";
import NewbornCardHeader from "../newbornCardHeader";

describe("<NewbornCardHeader />", () => {
  afterEach(cleanup);
  it("should display the correct title", () => {
    const { getByText } = renderWithReduxAndRouter(
      <NewbornCardHeader title="title" />
    );
    expect(getByText("title")).toBeTruthy();
  });

  it("should display the correct sub title", () => {
    const { getByText } = renderWithReduxAndRouter(
      <NewbornCardHeader subTitle="subTitle" />
    );
    expect(getByText("subTitle")).toBeTruthy();
  });
});
