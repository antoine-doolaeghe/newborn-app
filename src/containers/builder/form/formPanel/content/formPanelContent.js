import React, { useState } from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NewbornSelect from "../../../newbornSelect/builderNewbornSelect";
import Checkbox from "../../../../../components/atoms/checkboxes";
import Slider from "../../../../../components/atoms/slider";

export const FormPanelContent = ({ step }) => {
  const [trainerType, setTrainerType] = useState("static");
  const [movingTowardTarget, setMovingTowardTarget] = useState(false);
  const [rewardSpeed, setRewardSpeed] = useState(false);
  const [rewardFacingTarget, setRewardFacingTarget] = useState(false);
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
    return <NewbornSelect />;
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
};

export default FormPanelContent;
