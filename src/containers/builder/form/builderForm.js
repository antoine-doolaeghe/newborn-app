import React, { useState } from "react";
import FormPanel from "./formPanel/formPanel";
import { Wrapper } from "./style/builder.style";

export const BuilderForm = () => {
  const [steps, setSteps] = useState([
    "Selected Newborn",
    "Spawning Agent",
    "Add a training level"
  ]);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Wrapper>
      {steps.map((step, index) => (
        <FormPanel
          step={step}
          index={index}
          setActiveStep={setActiveStep}
          setSteps={setSteps}
        />
      ))}
    </Wrapper>
  );
};

export default BuilderForm;
