import React, { Fragment, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { returnNewbornCardInfo } from "./newbornList_helpers";
import { FlexContainer } from "../../../theme/layout/grid.style";
import { CardList } from "../../../components/lists";
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
      id,
      newborns: { items }
    }
  } = props;

  return (
    <Query query={GET_SELECTED_NEWBORN}>
      {({
        data: { selectedChild, selectedPartner },
        client,
        loading,
        error
      }) => {
        if (error) {
          return "error";
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

        const generationTitle = () => {
          // TODO: label component
          return (
            <Fragment>
              <span>Generation: </span>
              {id}
            </Fragment>
          );
        };

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
              onClick={props.onRecordOpen}
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
        return (
          <CardList
            list={newbornCardList}
            listTitle={generationTitle()}
            id="newborn-card-list"
          />
        );
      }}
    </Query>
  );
}

export default withRouter(NewbornList);
