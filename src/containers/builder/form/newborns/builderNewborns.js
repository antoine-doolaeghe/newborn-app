import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { updateNewborn } from "../../../../graphql/mutations";
import BuilderNewbornSelect from "./select/newbornSelect";
import BuilderNewbornList from "./list/newbornList";
import { Wrapper } from "./style/newbornSelect.style";

export default function BuilderNewborns({
  trainerNewborns,
  userNewborns,
  trainerId,
  refetch
}) {
  return (
    <Mutation mutation={gql(updateNewborn)}>
      {updateNewborn => {
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
            />
            <BuilderNewbornList
              newborns={trainerNewborns}
              remove={handleRemoveNewborn}
            />
          </Wrapper>
        );
      }}
    </Mutation>
  );
}

BuilderNewborns.defaultProps = {
  userNewborns: []
};

BuilderNewborns.propTypes = {
  // newborns: PropTypes.array,
  userNewborns: PropTypes.array
};
