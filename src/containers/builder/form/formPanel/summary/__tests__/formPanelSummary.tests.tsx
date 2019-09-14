import React from "react";
import { render } from "react-testing-library";
import { FormPanelSummary } from "../index";
import { MockedProvider } from "react-apollo/test-utils";
import { IFormPanelSummaryProps } from "../formPanelSummary";

const props: IFormPanelSummaryProps = {
  id: "testId",
  index: 4,
  label: "testlabel",
  refetch: jest.fn()
};

describe("Form Panel Summary Component", (): void => {
  it("should render form panel summary labelw", () => {
    const { getByText } = render(
      <MockedProvider>
        <FormPanelSummary {...props} />
      </MockedProvider>
    );
    expect(getByText("testlabel")).toBeTruthy();
  });
});
