import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { updateNewborn } from "../../../../graphql/mutations";
import BuilderNewbornSelect from "./select/builderNewbornSelect";
import BuilderNewbornList from "./list/builderNewbornList";
import { Wrapper, StyledLinearProgress } from "./style/builderNewborns.style";
import { StyledExpansionPanel } from "../style/builderForm.style";
import FormPanelSummary from "../formPanel/summary/formPanelSummary";
import { ErrorDialog } from "../../../../components/molecules/snackbars/errorSnackBar/style/error.style";

interface INewbornProps {
  trainer: string;
  id: string;
  name: string;
}

interface IBuilderNewbornsProps {
  trainerNewborns: Array<INewbornProps>;
  userNewborns: Array<INewbornProps>;
  trainerId: string;
  refetch: Function;
}

export default function BuilderNewborns({
  trainerNewborns,
  userNewborns,
  trainerId,
  refetch
}: IBuilderNewbornsProps) {
  const title = "Add Newborn";
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
              input: {
                id: selectedNewborn.id,
                newbornTrainerId: null
              }
            }
          }).then(() => {
            refetch();
          });
        };

        return (
          <StyledExpansionPanel expanded>
            <FormPanelSummary
              id="builder_newborns_select_summary"
              index={0}
              label={title}
              refetch={refetch}
            />
            <Wrapper>
              {loading && <StyledLinearProgress />}
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
