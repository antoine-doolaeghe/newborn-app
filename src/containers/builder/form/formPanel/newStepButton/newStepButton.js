import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
  height: 50px;
`;

export const NewStepButton = ({ steps, step, setSteps }) => {
  return (
    <ExpansionPanel
      style={{
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
      }}
      onClick={() => {
        console.log(steps.slice(0, steps.length - 2));
        setSteps([
          ...steps.slice(0, steps.length - 1),
          `Target ${step.length}`,
          "Add a training level"
        ]);
      }}
    >
      <Heading>{step}</Heading>
    </ExpansionPanel>
  );
};

export default NewStepButton;
