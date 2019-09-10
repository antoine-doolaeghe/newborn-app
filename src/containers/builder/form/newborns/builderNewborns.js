import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { updateNewborn } from "../../../../graphql/mutations";
import BuilderNewbornSelect from "./select/builderNewbornSelect";
import BuilderNewbornList from "./list/builderNewbornList";
import { Wrapper } from "./style/builderNewborns.style";
import { ErrorDialog } from "../../../../components/molecules/snackbars/errorSnackBar/style/error.style";

export default function BuilderNewborns({
  trainerNewborns,
  userNewborns,
  trainerId,
  refetch
}) {
  return (
    <Mutation mutation={gql(updateNewborn)}>
      {(updateNewborn, { loading, error }) => {
        const handleAddNewborn = selectedNewborn => {
          updateNewborn({
            variables: {
              input: {
                id: selectedNewborn.id,
                newbornTrainerId: trainerId
              }
            }
          });
          refetch();
        };

        const handleRemoveNewborn = selectedNewborn => {
          updateNewborn({
            variables: {
              input: { id: selectedNewborn.id, newbornTrainerId: null }
            }
          });
          refetch();
        };

        return (
          <Wrapper>
            <BuilderNewbornSelect
              newborns={userNewborns}
              add={handleAddNewborn}
              loading={loading}
            />
            <BuilderNewbornList
              newborns={trainerNewborns}
              remove={handleRemoveNewborn}
            />
            {error && <ErrorDialog open message={error.message} />}
          </Wrapper>
        );
      }}
    </Mutation>
  );
}

BuilderNewborns.propTypes = {
  trainerNewborns: PropTypes.array.isRequired,
  userNewborns: PropTypes.array.isRequired,
  trainerId: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired
};
