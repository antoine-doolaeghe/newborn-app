import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { returnNewbornCardInfo } from "./newbornList_helpers";
import { FlexContainer } from "../../../theme/layout/grid.style";
import { CardList } from "../../../components/organisms/lists";
import {
  NewbornCard,
  NewbornCardLoader
} from "../../../components/organisms/cards";

const GET_SELECTED_NEWBORN = gql`
  {
    selectedPartner @client
    selectedChild @client
  }
`;

function NewbornList(props) {
  const { title, items, isLoading } = props;
  return (
    <Query query={GET_SELECTED_NEWBORN}>
      {({ data: { selectedChild, selectedPartner }, client, error }) => {
        if (error) {
          return "error";
        }

        if (isLoading) {
          const loadingList = [
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />,
            <NewbornCardLoader />
          ];
          return (
            <CardList
              list={loadingList}
              listTitle="loading"
              id="newborn-card-list"
            />
          );
        }

        const generationTitle = () => {
          // TODO: label component
          return <Fragment>{title}</Fragment>;
        };

        const newbornCardList = [];
        items.forEach((newborn, newbornKey) => {
          const newbornInfo = returnNewbornCardInfo(
            newborn,
            selectedPartner,
            selectedChild
          );

          newbornCardList.push(
            <NewbornCard
              isPlaceholderCard={false}
              newbornInfo={newbornInfo}
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
            listTitle={title}
            id="newborn-card-list"
          />
        );
      }}
    </Query>
  );
}

export default withRouter(NewbornList);
