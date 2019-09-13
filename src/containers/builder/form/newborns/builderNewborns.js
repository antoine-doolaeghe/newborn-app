import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import LinearProgress from "@material-ui/core/LinearProgress";
import { updateNewborn } from "../../../../graphql/mutations";
import BuilderNewbornSelect from "./select/builderNewbornSelect";
import BuilderNewbornList from "./list/builderNewbornList";
import { Wrapper } from "./style/builderNewborns.style";
import { StyledExpansionPanel } from "../style/builder.style";
import FormPanelSummary from "../formPanel/summary/formPanelSummary";
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
          }).then(() => {
            refetch();
          });
        };

        const handleRemoveNewborn = selectedNewborn => {
          updateNewborn({
            variables: {
              input: { id: selectedNewborn.id, newbornTrainerId: null }
            }
          }).then(() => {
            refetch();
          });
        };

        return (
          <StyledExpansionPanel expanded>
            <FormPanelSummary index={0} label="step" />
            <Wrapper>
              {loading && (
                <LinearProgress
                  style={{
                    position: "absolute",
                    height: 4,
                    width: "100%",
                    top: 0,
                    left: 0
                  }}
                />
              )}
              <BuilderNewbornSelect
                loading={loading}
                newborns={userNewborns}
                add={handleAddNewborn}
              />
              <BuilderNewbornList
                newborns={trainerNewborns}
                remove={handleRemoveNewborn}
              />
              {error && <ErrorDialog open message={error.message} />}
            </Wrapper>
          </StyledExpansionPanel>
        );
      }}
    </Mutation>
  );
}

BuilderNewborns.propTypes = {
  trainerNewborns: PropTypes.array.isRequired,
  userNewborns: PropTypes.array.isRequired,
  trainerId: PropTypes.string.isRequired
};
