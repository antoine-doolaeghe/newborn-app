import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import withHeader from "../../../containers/header/withHeader";
import { Button } from "../../../components/molecules/buttons/button.style";

export const BuilderHeader = () => {
  const [trainerTitle, setTrainerTitle] = useState(["Trainer title"]);
  const [steps, setSteps] = useState(["Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <TextField
          id="standard-name"
          value={trainerTitle}
          onChange={event => {
            setTrainerTitle(event.target.value);
          }}
          margin="normal"
        />
        <Select
          inputProps={{
            name: "age",
            id: "age-native-simple"
          }}
        >
          <option value="static">Static Target</option>
          <option value="dynamic">Dynamic Target</option>
        </Select>
        <Button
          color="primary"
          onClick={() => {
            setSteps([...steps, `Target ${steps.length}`]);
            setActiveStep(steps.length);
          }}
        >
          Add
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setSteps([...steps, `Target ${steps.length}`]);
            setActiveStep(steps.length);
          }}
        >
          Train
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default BuilderHeader;
