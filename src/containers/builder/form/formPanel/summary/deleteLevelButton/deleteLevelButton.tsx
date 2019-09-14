import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "../../../../../../components/atoms/text";
import { Button } from "../../../../../../components/molecules/buttons";
import { ErrorDialog } from "../../../../../../components/molecules/snackbars/errorSnackBar/style/error.style";

export const DELETE_TRAINING_LEVEL = gql`
  mutation DeleteTrainingLevel($id: ID!) {
    deleteLevel(input: { id: $id }) {
      id
    }
  }
`;

export interface IDeleteLevelButtonProps {
  id: string;
  refetch: Function;
}

export const DeleteLevelButton = ({ id, refetch }: IDeleteLevelButtonProps) => {
  return (
    <Mutation mutation={DELETE_TRAINING_LEVEL}>
      {(deleteNewborn, { loading, error }) => {
        if (error) {
          return <ErrorDialog open message={error.message} />;
        }
        return (
          <Button
            loading={loading}
            color="primary"
            onClick={() => {
              deleteNewborn({
                variables: { id }
              }).then(() => {
                refetch();
              });
            }}
          >
            <Text>Delete</Text>
          </Button>
        );
      }}
    </Mutation>
  );
};

export default DeleteLevelButton;
