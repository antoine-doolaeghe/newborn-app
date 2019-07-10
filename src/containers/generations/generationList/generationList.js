import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import * as queries from "../../../graphql/queries";
import { FlexContainer } from "../../../theme/layout/grid.style";
import NewbornList from "../newbornList/newbornList";
import { ErrorDialog } from "../../../components/organisms/snackbars/errorSnackBar/style/error.style";

import NewbornRecord from "../../newbornRecord/newbornRecord";

function GenerationList() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [id, setId] = useState("");
  const onRecordClose = () => setIsRecordOpen(false);
  const onRecordOpen = event => {
    setId(event.target.closest("section").dataset.newbornid);
    setIsRecordOpen(true);
  };
  const returnNewbornGeneration = () => {
    return (
      <Query query={gql(queries.listGenerations)}>
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }
          if (loading) {
            return (
              <FlexContainer height="280px">
                <CircularProgress
                  variant="indeterminate"
                  data-testid="newbornListLoading"
                />
              </FlexContainer>
            );
          }
          return data.listGenerations.items.map(generation => {
            return (
              <div>
                <NewbornRecord
                  id={id}
                  open={isRecordOpen}
                  onClose={onRecordClose}
                />
                <NewbornList
                  generation={generation}
                  onRecordOpen={onRecordOpen}
                />
              </div>
            );
          });
        }}
      </Query>
    );
  };
  return returnNewbornGeneration();
}

export default GenerationList;
