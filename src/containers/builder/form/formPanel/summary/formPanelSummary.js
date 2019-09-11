import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Heading,
  StyledExpansionPanelSummary
} from "./style/formPanelSummary.style";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";
import { Text } from "../../../../../components/atoms/text";

export const FormPanelSummary = ({
  index,
  label,
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
  const hasCancelButton = index !== 0 && index !== 1;
  return (
    <StyledExpansionPanelSummary
      expandIcon={hasCancelButton && <ExpandMoreIcon />}
      onClick={handlePanelOnclick}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Heading>
          <Text>{label}</Text>
        </Heading>
        {hasCancelButton && (
          <DefaultButton
            color="primary"
            onClick={() => {
              const array = steps.filter((_, i) => index !== i);
              setSteps(array);
            }}
          >
            <Text>Delete</Text>
          </DefaultButton>
        )}
      </div>
    </StyledExpansionPanelSummary>
  );
};

FormPanelSummary.propTypes = {
  index: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default FormPanelSummary;
