import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {
  CardWrapper,
  CardContent,
  TrainerActionWrapper,
  CreateTrainerButton
} from "./style/createTrainerCard.style";
import { Text } from "../../../atoms/text";
import TrainerNameInput from "./input/trainerNameInput";

const CREATE_TRAINER = gql`
  mutation CreateTrainer($title: String!, $trainerOwnerId: ID!) {
    createTrainer(input: { title: $title, trainerOwnerId: $trainerOwnerId }) {
      title
      id
    }
  }
`;

function CreateTrainerCard({ history, currentUserId }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  return (
    <CardWrapper
      style={{
        border: "2px solid lightgrey",
        borderRadius: "20px 20px 0px 0px"
      }}
    >
      <CardContent>
        <TrainerNameInput setTitle={setTitle} error={error} />
        <TrainerActionWrapper>
          <Mutation mutation={CREATE_TRAINER}>
            {(createTrainer, { data }) => {
              if (data && data.createTrainer) {
                history.push(`./builder/${data.createTrainer.id}`);
              }
              return (
                <CreateTrainerButton
                  onClick={() => {
                    if (title.length > 3) {
                      createTrainer({
                        variables: { title, trainerOwnerId: currentUserId }
                      });
                    } else {
                      setError(true);
                    }
                  }}
                  color="primary"
                >
                  <Text size="small" color="light">
                    Create Trainer
                  </Text>
                </CreateTrainerButton>
              );
            }}
          </Mutation>
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
