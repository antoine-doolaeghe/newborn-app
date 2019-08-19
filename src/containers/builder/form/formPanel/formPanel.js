import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import FormaPanelSummary from "./summary/formPanelSummary";
import FormaPanelContent from "./content/formPanelContent";

const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 10;
`;

export const FormPanel = ({ step, index, setActiveStep, setSteps }) => {
  return (
    <StyledExpansionPanel>
      <FormaPanelSummary
        index={index}
        setActiveStep={setActiveStep}
        setSteps={setSteps}
        step={step}
      />
      <FormaPanelContent step={step} />
    </StyledExpansionPanel>
  );
};

export default FormPanel;
