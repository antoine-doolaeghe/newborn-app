import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import uuidv3 from "uuid/v4";
import { Text } from "../../../../../components/atoms/text";
import { Button } from "../../../../../components/molecules/buttons";
import { ErrorDialog } from "../../../../../components/molecules/snackbars/errorSnackBar/style/error.style";

export const CREATE_TRAINING_LEVEL = gql`
  mutation CreateTrainingLevel($id: ID!, $levelTrainerId: ID!) {
    createLevel(input: { id: $id, levelTrainerId: $levelTrainerId }) {
      id
    }
  }
`;

export interface ICreateLevelProps {
  trainerId: string;
  refetch: Function;
}

export const CreateLevelButton = ({
  trainerId,
  refetch
}: ICreateLevelProps) => {
  return (
    <Mutation mutation={CREATE_TRAINING_LEVEL}>
      {(updateNewborn, { loading, error }) => {
        if (error) {
          return <ErrorDialog open message={error.message} />;
        }
        return (
          <Button
            loading={loading}
            color="secondary"
            onClick={(): void => {
              updateNewborn({
                variables: { id: uuidv3(), levelTrainerId: trainerId }
              }).then((): void => {
                refetch();
              });
            }}
          >
            <Text>Create Level button</Text>
          </Button>
        );
      }}
    </Mutation>
  );
};

export default CreateLevelButton;
