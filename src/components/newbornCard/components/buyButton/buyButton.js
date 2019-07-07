import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as mutations from "../../../../graphql/mutations";
import { Button } from "../../../../theme/buttons/button.style";
import { FlexContainer } from "../../../../theme/layout/grid.style";

const BuyButton = ({ id, currentUserId, newbornInfo }) => {
  const onClick = (event, buy) => {
    event.stopPropagation();
    buy();
  };
  return (
    <Mutation
      mutation={gql(mutations.updateNewborn)}
      variables={{
        input: {
          id,
          newbornOwnerId: !newbornInfo.isOwnedByCurrentUser
            ? currentUserId
            : null
        }
      }}
    >
      {(buy, { loading }) => {
        return (
          <Button
            color="primary"
            onClick={event => onClick(event, buy)}
            data-testid="newbornOwnershipButton"
          >
            {loading && (
              <FlexContainer>
                <CircularProgress
                  variant="indeterminate"
                  data-testid="newbornListLoading"
                />
              </FlexContainer>
            )}
          </Button>
        );
      }}
    </Mutation>
  );
};
export default BuyButton;
