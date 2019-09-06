import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Heading,
  SecondaryHeading,
  StyledExpansionPanelSummary
} from "./style/formPanelSummary.style";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";
import { Text } from "../../../../../components/atoms/text";

export const FormPanelSummary = ({
  index,
  step,
  steps,
  activeStep,
  setSteps,
  setActiveStep
}) => {
  const handlePanelOnclick = () => {
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
    }
  };
  return (
    <StyledExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      onClick={handlePanelOnclick}
    >
      <Heading>
        <Text>{step}</Text>
      </Heading>
      <SecondaryHeading>
        <Text>{step}</Text>
      </SecondaryHeading>
      <DefaultButton
        color="primary"
        onClick={() => {
          setSteps([...steps.splice(index, index + 1)]);
        }}
      >
        <Text>Delete</Text>
      </DefaultButton>
    </StyledExpansionPanelSummary>
  );
};

FormPanelSummary.propTypes = {
  index: PropTypes.number.isRequired,
  step: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default FormPanelSummary;
