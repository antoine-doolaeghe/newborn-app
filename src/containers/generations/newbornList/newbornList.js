import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
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

  return (
    <Query query={GET_SELECTED_NEWBORN}>
      {({ data, client, loading }) => {
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
          const newbornInfo = returnNewbornCardInfo(newborn, currentUserId);
          const isPartnerSelected =
            data.selectedPartner === newbornInfo.id ||
            (newborn.partners &&
              newborn.partners.includes(data.selectedPartner));

          const isChildSelected =
            data.selectedChild === newbornInfo.id ||
            (newborn.partners && newborn.partners.includes(data.selectedChild));

          newbornCardList.push(
            <NewbornCard
              isPlaceholderCard={false}
              newbornInfo={newbornInfo}
              currentUserId={currentUserId}
              key={newbornKey}
              isSelected={isPartnerSelected || isChildSelected}
              onPartnerClick={() => {
                console.log("HERE");
                client.writeData({
                  data: {
                    selectedPartner: newbornInfo.id
                  }
                });
              }}
              onChildClick={() =>
                client.writeData({
                  data: {
                    selectedChild: newbornInfo.id
                  }
                })
              }
              partners={[]}
            />
          );
        });
        return returnGridList(newbornCardList, items.length);
      }}
    </Query>
  );
}

export default NewbornList;
