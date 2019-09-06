import React, { useState } from "react";
import PropTypes from "prop-types";
import FormPanel from "./formPanel/formPanel";
import NewStepButton from "./formPanel/newStepButton/newStepButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper } from "./style/builder.style";

export const BuilderForm = ({ trainerId }) => {
  const [steps, setSteps] = useState(["Selected Newborn", "Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Wrapper>
      {steps.map((step, index) => {
        return (
          <FormPanel
            activeStep={activeStep}
            step={step}
            steps={steps}
            index={index}
            setSteps={setSteps}
            setActiveStep={setActiveStep}
          />
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
  trainerId: PropTypes.string.isRequired
};

export default BuilderForm;
