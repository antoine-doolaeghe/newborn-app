import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../../components/atoms/text";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";

export const NewStepButton = ({ steps, setSteps }) => {
  return (
    <DefaultButton
      color="secondary"
      onClick={() => {
        setSteps([...steps.slice(0, steps.length), `Target ${steps.length}`]);
      }}
    >
      <Text>Add a new trainer</Text>
    </DefaultButton>
  );
};

NewStepButton.propTypes = {
  steps: PropTypes.array.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default NewStepButton;
