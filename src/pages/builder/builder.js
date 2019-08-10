import React, { useEffect, useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import withHeader from "../../containers/header/withHeader";

// the user can select some step of learning
// Initial position ? (SPACER WHERE THE ELEMENT SPAWN)
// Level 1 => position target
// Is the target dynamic/ is the target reflective/ is the target static?
// Is there some constraint to reach the target ?
// What is the threshold to reach ?
// Are you penalising not moving forward ?

// new level ? What is the aim of the level ? (target ?/)
// The user can add some curriculum level.

function getSteps() {
  return [
    "Spawning",
    "Target 1",
    "Target 2",
    "Spawning",
    "Target 1",
    "Target 2",
    "Spawning",
    "Target 1",
    "Target 2"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The description for how you should be spawning.`;
    case 1:
      return "The description for how you should be spawning.";
    case 2:
      return `The description for how you should be spawning.`;
    default:
      return "Unknown step";
  }
}

export const Builder = () => {
  const classes = {};
  const [steps, setSteps] = React.useState([
    "Spawning",
    "Target 1",
    "Target 2",
    "Spawning",
    "Target 1",
    "Target 2",
    "Spawning",
    "Target 1",
    "Target 2"
  ]);
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (!instance) {
      setInstance(
        window.UnityLoader.instantiate("gameContainer", "Build/test.json", {
          onProgress: window.UnityProgress
        })
      );
    }
  }, [instance]);

  useEffect(() => {
    return () => {
      if (instance) {
        instance.Quit(() => {
          console.log("done!");
        });
      }
    };
  }, [instance]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <List style={{ borderRight: "1px solid grey", textAlign: "center" }}>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItem>
          ))}
        </List>
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          <Button
            onClick={() => {
              setSteps([...steps, "HEHHEH"]);
            }}
            className={classes.button}
          >
            ADD
          </Button>
          <Button
            onClick={() => {
              setSteps(steps.slice(0, steps.length - 1));
            }}
            className={classes.button}
          >
            REMOVE
          </Button>
        </div>
      </div>
      <div
        id="gameContainer"
        style={{
          flex: 1
          // position: "absolute",
          // right: 0,
          // top: 0,
          // width: "50vw",
          // height: "100vh"
        }}
      />
    </div>
  );
};

export default withHeader(Builder);
