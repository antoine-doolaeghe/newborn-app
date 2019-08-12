import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TransferList from "../builderNewbornSelect/builderNewbornSelect";
import { Button } from "../../../components/molecules/buttons/button.style";
import { Heading, SecondaryHeading } from "./style/builder.style";

export const BuilderForm = () => {
  const classes = {};
  const [steps, setSteps] = useState([
    "Selected Newborn",
    "Spawning Agent",
    "Add a training level"
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [trainerType, setTrainerType] = useState("static");
  const [movingTowardTarget, setMovingTowardTarget] = useState(false);
  const [rewardSpeed, setRewardSpeed] = useState(false);
  const [rewardFacingTarget, setRewardFacingTarget] = useState(false);

  function getStepContent(step) {
    if (step === 1) {
      return (
        <ExpansionPanelDetails>
          <p>The number of initial spawner/</p>
          <p>Is static or area ?</p>
          <p>If random </p>
        </ExpansionPanelDetails>
      );
    }
    if (step === 0) {
      return <TransferList />;
    }

    return (
      <ExpansionPanelDetails
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        <InputLabel htmlFor="age-native-simple">Target type</InputLabel>
        <Select
          value={trainerType}
          onChange={event => {
            setTrainerType(event.target.value);
          }}
          inputProps={{
            name: "age",
            id: "age-native-simple"
          }}
        >
          <option value="static">Static Target</option>
          <option value="dynamic">Dynamic Target</option>
        </Select>
        {trainerType === "dynamic" && (
          <div>
            <p>Spawning area radius</p>
            <Slider
              defaultValue={30}
              // getAriaValueText="valuetext"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </div>
        )}
        <FormControlLabel
          control={
            <Checkbox
              checked={movingTowardTarget}
              onChange={() => {
                setMovingTowardTarget(!movingTowardTarget);
              }}
            />
          }
          label="Reward moving towards the target"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rewardSpeed}
              onChange={() => {
                setRewardSpeed(!rewardSpeed);
              }}
            />
          }
          label="Reward speed to target"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rewardFacingTarget}
              onChange={() => {
                setRewardFacingTarget(!rewardFacingTarget);
              }}
            />
          }
          label="Reward agent facing the target"
        />
        <div>
          <p>Minimum time to reach target</p>
          <Slider
            defaultValue={30}
            // getAriaValueText="valuetext"
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
        <div>
          <p>Number of time that it should reach before next step</p>
          <Slider
            defaultValue={30}
            // getAriaValueText="valuetext"
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
      </ExpansionPanelDetails>
    );
  }

  function returnStepSummary(label, index) {
    if (index === steps.length - 1) {
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
              ...steps.slice(0, steps.length - 1),
              `Target ${steps.length}`,
              "Add a training level"
            ]);
            setActiveStep(steps.length);
          }}
        >
          <Heading>{label}</Heading>
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
        <Heading>{label}</Heading>
        <SecondaryHeading>{label}</SecondaryHeading>
        <Button
          color="primary"
          onClick={() => {
            steps.splice(index, 1);
            setSteps(steps);
          }}
          className={classes.button}
        >
          delete
        </Button>
      </ExpansionPanelSummary>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      {steps.map((label, index) => (
        <ExpansionPanel style={{ margin: 10 }} key={label}>
          {returnStepSummary(label, index)}
          {getStepContent(index)}
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default BuilderForm;
