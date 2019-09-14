import React from "react";
import { render } from "react-testing-library";
import { LevelForm } from "../index";
import { MockedProvider } from "react-apollo/test-utils";
import { ICreateLevelProps } from "../createLevelButton";

const props: ICreateLevelProps = {
  id: "testId",
  refetch: jest.fn()
};

describe("Level Form Component", (): void => {
  it("render the target type title", () => {
    const { getByText } = render(
      <MockedProvider>
        <LevelForm {...props} />
      </MockedProvider>
    );
    expect(getByText("Target type")).toBeTruthy();
  });
});
