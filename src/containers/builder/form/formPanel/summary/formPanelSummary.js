import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Heading, SecondaryHeading } from "./style/formPanelSummary.style";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";

export const FormPanelSummary = ({ index, step, setSteps, setActiveStep }) => {
  if (index === step.length - 1) {
    return (
      <div
        style={{
          minHeight: 48,
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => {
          setSteps([
            ...step.slice(0, step.length - 1),
            `Target ${step.length}`,
            "Add a training level"
          ]);
          setActiveStep(step.length);
        }}
      >
        <Heading>{step}</Heading>
      </div>
    );
  }
  return (
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row"
      }}
      onClick={() => {
        setActiveStep(index);
      }}
    >
      <Heading>{step}</Heading>
      <SecondaryHeading>{step}</SecondaryHeading>
      <DefaultButton
        color="primary"
        onClick={() => {
          step.splice(index, 1);
          setSteps(step);
        }}
      >
        delete
      </DefaultButton>
    </ExpansionPanelSummary>
  );
};

export default FormPanelSummary;
