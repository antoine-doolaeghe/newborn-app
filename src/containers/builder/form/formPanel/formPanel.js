import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import FormaPanelSummary from "./summary/formPanelSummary";
import FormaPanelContent from "./content/formPanelContent";

const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 10;
`;

export const FormPanel = ({
  step,
  steps,
  activeStep,
  index,
  setActiveStep,
  setSteps
}) => {
  return (
    <StyledExpansionPanel expanded={index === activeStep}>
      <FormaPanelSummary
        index={index}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setSteps={setSteps}
        steps={steps}
        step={step}
      />
      <FormaPanelContent index={index} />
    </StyledExpansionPanel>
  );
};

export default FormPanel;
