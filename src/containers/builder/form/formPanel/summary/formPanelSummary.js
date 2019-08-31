import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Heading, SecondaryHeading } from "./style/formPanelSummary.style";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";

export const FormPanelSummary = ({
  index,
  step,
  steps,
  activeStep,
  setSteps,
  setActiveStep
}) => {
  return (
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row"
      }}
      onClick={() => {
        if (activeStep === index) {
          setActiveStep(null);
        } else {
          setActiveStep(index);
        }
      }}
    >
      <Heading>{step}</Heading>
      <SecondaryHeading>{step}</SecondaryHeading>
      <DefaultButton
        color="primary"
        onClick={() => {
          setSteps([...steps.splice(index, index + 1)]);
        }}
      >
        delete
      </DefaultButton>
    </ExpansionPanelSummary>
  );
};

export default FormPanelSummary;
