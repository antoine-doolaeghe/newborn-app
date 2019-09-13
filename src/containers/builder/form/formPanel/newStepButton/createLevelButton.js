import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import uuidv3 from "uuid/v4";
import { Text } from "../../../../../components/atoms/text";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";

const CREATE_TRAINING_LEVEL = gql`
  mutation CreateTrainingLevel($id: ID!, $levelTrainerId: ID!) {
    createLevel(input: { id: $id, levelTrainerId: $levelTrainerId }) {
      id
    }
  }
`;

export const CreateLevelButton = ({ steps, setSteps, trainerId, refetch }) => {
  return (
    <Mutation mutation={CREATE_TRAINING_LEVEL}>
      {(updateNewborn, { loading, error }) => {
        console.log(loading);
        console.log(error);
        console.log(trainerId);
        return (
          <DefaultButton
            color="secondary"
            onClick={() => {
              updateNewborn({
                variables: { id: uuidv3(), levelTrainerId: trainerId }
              });
              setSteps([
                ...steps.slice(0, steps.length),
                `Target ${steps.length}`
              ]);
              refetch();
            }}
          >
            <Text>Create Level button</Text>
          </DefaultButton>
        );
      }}
    </Mutation>
  );
};

CreateLevelButton.propTypes = {
  steps: PropTypes.array.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default CreateLevelButton;
