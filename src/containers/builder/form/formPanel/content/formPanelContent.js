import React, { useState } from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
import NewbornSelect from "../../../newbornSelect/newbornSelect";
import Checkbox from "../../../../../components/atoms/checkboxes";
import Slider from "../../../../../components/atoms/slider";
import { Text } from "../../../../../components/atoms/text";

export const FormPanelContent = ({ index, trainerNewborns, userNewborns }) => {
  const [trainerType, setTrainerType] = useState("static");
  const [movingTowardTarget, setMovingTowardTarget] = useState(false);
  const [rewardSpeed, setRewardSpeed] = useState(false);
  const [rewardFacingTarget, setRewardFacingTarget] = useState(false);

  if (index === 0) {
    return (
      <NewbornSelect
        trainerNewborns={trainerNewborns}
        userNewborns={userNewborns}
      />
    );
  }

  if (index === 1) {
    return (
      <ExpansionPanelDetails>
        <Text>The number of initial spawner</Text>
        <Text>Is static or area ?</Text>
        <Text>If random </Text>
      </ExpansionPanelDetails>
    );
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
          <Text>Spawning area radius</Text>
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
        <Text>Minimum time to reach target</Text>
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
        <Text>Number of time that it should reach before next step</Text>
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

FormPanelContent.propTypes = {
  index: PropTypes.number.isRequired,
  trainerNewborns: PropTypes.array.isRequired,
  userNewborns: PropTypes.array.isRequired
};

export default FormPanelContent;
