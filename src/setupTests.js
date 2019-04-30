import React from "react";

jest.mock("highcharts-react-official", () => {
  return () => <div />;
});

jest.mock("@tensorflow/tfjs", () => {
  return { HighchartsReact: "felo" };
});

jest.mock("aws-amplify-react", () => {
  return {
    withAuthenticator: component => {
      return component;
    }
  };
});
