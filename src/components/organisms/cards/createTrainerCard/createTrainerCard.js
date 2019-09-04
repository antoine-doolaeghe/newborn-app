import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  CardWrapper,
  CardContent,
  TrainerActionWrapper,
  CreateTrainerButton
} from "./style/createTrainerCard.style";
import TrainerTemplate from "./trainerTemplate/trainerTemplate";

function CreateTrainerCard({ history }) {
  return (
    <CardWrapper>
      <CardContent>
        <div>
          <TrainerTemplate />
        </div>
        <TrainerActionWrapper>
          <CreateTrainerButton
            onClick={() => {
              history.push("./builder/bf85eeb2-b77b-4e1d-aedf-a8689e5dad9a");
            }}
            color="primary"
          >
            Create Trainer
          </CreateTrainerButton>
        </TrainerActionWrapper>
      </CardContent>
    </CardWrapper>
  );
}

CreateTrainerCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(CreateTrainerCard);
