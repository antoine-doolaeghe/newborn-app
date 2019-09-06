import React from "react";
import PropTypes from "prop-types";
import { Heading, StyledExpansionPanel } from "./style/newStepButton.style";
import { Text } from "../../../../../components/atoms/text";

export const NewStepButton = ({ steps, step, setSteps }) => {
  return (
    <StyledExpansionPanel
      onClick={() => {
        setSteps([
          ...steps.slice(0, steps.length - 1),
          `Target ${step.length}`
        ]);
      }}
    >
      <Heading>
        <Text>{step}</Text>
      </Heading>
    </StyledExpansionPanel>
  );
};

NewStepButton.propTypes = {
  steps: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default NewStepButton;
