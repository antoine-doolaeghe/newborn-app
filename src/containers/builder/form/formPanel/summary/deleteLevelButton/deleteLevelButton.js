import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "../../../../../../components/atoms/text";
import DefaultButton from "../../../../../../components/molecules/buttons/defaultButton/defaultButton";

const CREATE_TRAINING_LEVEL = gql`
  mutation CreateTrainingLevel($id: ID!) {
    deleteLevel(input: { id: $id }) {
      id
    }
  }
`;

export const DeleteLevelButton = ({ id }) => {
  return (
    <Mutation mutation={CREATE_TRAINING_LEVEL}>
      {(deleteNewborn, { loading, error }) => {
        console.log(loading);
        console.log(error);
        return (
          <DefaultButton
            color="primary"
            onClick={() => {
              deleteNewborn({
                variables: { id }
              });
            }}
          >
            <Text>Delete</Text>
          </DefaultButton>
        );
      }}
    </Mutation>
  );
};

export default DeleteLevelButton;
