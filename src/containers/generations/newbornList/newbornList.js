import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { returnNewbornCardInfo } from "./newbornList_helpers";
import { Grid, FlexContainer } from "../../../theme/layout/grid.style";
import { NewbornCard } from "../../../components/cards";

const GET_SELECTED_NEWBORN = gql`
  {
    selectedPartner @client
    selectedChild @client
  }
`;

function NewbornList(props) {
  const {
    currentUserId,
    history,
    generation: {
      newborns: { items }
    }
  } = props;

  const returnGridList = (newbornCardList, columnNumber) => {
    return (
      <Grid
        columnNumber={columnNumber}
        data-testid="newborn-card-list"
        rowNumber={1}
      >
        {newbornCardList}
      </Grid>
    );
  };

  const onCardClick = id => {
    history.push({
      pathname: `/newborn-record`,
      search: `?id=${id}`,
      state: {
        id
      }
    });
  };

  return (
    <Query query={GET_SELECTED_NEWBORN}>
      {({ data: { selectedChild, selectedPartner }, client, loading }) => {
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
        const newbornCardList = [];
        items.forEach((newborn, newbornKey) => {
          const newbornInfo = returnNewbornCardInfo(
            newborn,
            currentUserId,
            selectedPartner,
            selectedChild
          );

          newbornCardList.push(
            <NewbornCard
              isPlaceholderCard={false}
              newbornInfo={newbornInfo}
              currentUserId={currentUserId}
              key={newbornKey}
              color={newbornInfo.color}
              onClick={() => onCardClick(newbornInfo.id)}
              onPartnerClick={event => {
                event.stopPropagation();
                client.writeData({
                  data: {
                    selectedPartner: newbornInfo.id
                  }
                });
              }}
              onChildClick={event => {
                event.stopPropagation();
                client.writeData({
                  data: {
                    selectedChild: newbornInfo.id
                  }
                });
              }}
              partners={[]}
            />
          );
        });
        return returnGridList(newbornCardList, items.length);
      }}
    </Query>
  );
}

export default withRouter(NewbornList);
