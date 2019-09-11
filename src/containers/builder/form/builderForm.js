import React, { useState } from "react";
import PropTypes from "prop-types";
import NewStepButton from "./formPanel/newStepButton/newStepButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper, StyledExpansionPanel } from "./style/builder.style";
import FormPanelSummary from "./formPanel/summary/formPanelSummary";
import FormPanelContent from "./formPanel/content/formPanelContent";
import BuilderNewborns from "./newborns/builderNewborns";

export const BuilderForm = ({
  trainerId,
  trainerNewborns,
  userNewborns,
  refetch
}) => {
  const [steps, setSteps] = useState(["Selected Newborn", "Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  const returnFormPanelContent = index => {
    switch (index) {
      case 0:
        return (
          <BuilderNewborns
            trainerId={trainerId}
            refetch={refetch}
            trainerNewborns={trainerNewborns}
            userNewborns={userNewborns}
          />
        );
      default:
        return <FormPanelContent index={index} />;
    }
  };

  return (
    <Wrapper>
      {steps.map((step, index) => {
        const isActive = index === activeStep || index === 0 || index === 1;
        return (
          <StyledExpansionPanel expanded={isActive}>
            <FormPanelSummary
              index={index}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              setSteps={setSteps}
              steps={steps}
              label={step}
            />
            {returnFormPanelContent(index)}
          </StyledExpansionPanel>
        );
      })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <NewStepButton steps={steps} setSteps={setSteps} />
        <TrainButton trainerId={trainerId} steps={steps} setSteps={setSteps} />
      </div>
    </Wrapper>
  );
};

BuilderForm.propTypes = {
  trainerId: PropTypes.string.isRequired,
  trainerNewborns: PropTypes.array.isRequired,
  userNewborns: PropTypes.array.isRequired
};

export default BuilderForm;
