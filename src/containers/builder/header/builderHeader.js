import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import BuilderProgress from "./progress/builderProgress";
import DefaultButton from "../../../components/molecules/buttons/defaultButton/defaultButton";

export const BuilderHeader = () => {
  const [trainerTitle, setTrainerTitle] = useState(["Trainer title"]);
  const [steps, setSteps] = useState(["Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <TextField
          style={{ fontSize: 35, fontWeight: 700 }}
          id="standard-name"
          value={trainerTitle}
          onChange={event => {
            setTrainerTitle(event.target.value);
          }}
          margin="normal"
        />
        0 step / 200 step
        <BuilderProgress />
        <DefaultButton
          color="primary"
          onClick={() => {
            setSteps([...steps, `Target ${steps.length}`]);
            setActiveStep(steps.length);
          }}
        >
          Train
        </DefaultButton>
      </Toolbar>
    </AppBar>
  );
};

export default BuilderHeader;
