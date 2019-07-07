import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withAuthenticator } from "aws-amplify-react";

import * as queries from "../../../graphql/queries";
import { FlexContainer } from "../../../theme/layout/grid.style";
import NewbornList from "../newbornList/newbornList";
import withHeader from "../../header/withHeader";
import { ErrorDialog } from "../../../theme/snackbars/error.style";

function GenerationList() {
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
            return <NewbornList generation={generation} />;
          });
        }}
      </Query>
    );
  };
  return returnNewbornGeneration();
}

export default withAuthenticator(withHeader(GenerationList));
