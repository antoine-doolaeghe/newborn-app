import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import templates from "./config";
import {
  StyledMobileStepper,
  StyledTemplateImage
} from "./style/trainerTemplate.style";

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = templates.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div style={{ position: "relative" }}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {templates.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <StyledTemplateImage src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <StyledMobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
