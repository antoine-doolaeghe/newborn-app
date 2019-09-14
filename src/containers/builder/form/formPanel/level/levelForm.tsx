import React, { useState } from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Select } from "../../../../../components/molecules/inputs/select";
import Checkbox from "../../../../../components/atoms/checkboxes";
import Slider from "../../../../../components/atoms/slider";
import { Text } from "../../../../../components/atoms/text";
import { StyledExpansionPanel } from "../../style/builderForm.style";
import FormPanelSummary from "../summary/formPanelSummary";

export interface ILevelFormProps {
  id: string;
  refetch: Function;
}

export const LevelForm = ({ id, refetch }: ILevelFormProps) => {
  const [trainerType, setTrainerType] = useState("static");
  const [movingTowardTarget, setMovingTowardTarget] = useState(false);
  const [rewardSpeed, setRewardSpeed] = useState(false);
  const [rewardFacingTarget, setRewardFacingTarget] = useState(false);

  return (
    <StyledExpansionPanel expanded>
      <FormPanelSummary id={id} index={4} label="step" refetch={refetch} />
      <ExpansionPanelDetails
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        <Select
          id="target_type_select"
          label="Target type"
          options={[
            <option value="static">Static Target</option>,
            <option value="dynamic">Dynamic Target</option>
          ]}
          onChange={event => {
            setTrainerType(event.target.value);
          }}
        />
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
    </StyledExpansionPanel>
  );
};

export default LevelForm;
