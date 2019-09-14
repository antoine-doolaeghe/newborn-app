import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "../../../../../../components/atoms/text";
import { Button } from "../../../../../../components/molecules/buttons";
import { ErrorDialog } from "../../../../../../components/molecules/snackbars/errorSnackBar/style/error.style";

const CREATE_TRAINING_LEVEL = gql`
  mutation CreateTrainingLevel($id: ID!) {
    deleteLevel(input: { id: $id }) {
      id
    }
  }
`;

export const DeleteLevelButton = ({ id, refetch }) => {
  return (
    <Mutation mutation={CREATE_TRAINING_LEVEL}>
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
