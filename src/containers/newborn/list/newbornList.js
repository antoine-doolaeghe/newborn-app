import React from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { returnNewbornCardInfo } from "./utils/newbornList_helpers";
import { CardList } from "../../../components/organisms/lists";
import { NewbornCard } from "../../../components/organisms/cards";

const GET_SELECTED_NEWBORN = gql`
  {
    selectedPartner @client
    selectedChild @client
  }
`;

function NewbornList({ title, items, loading, onRecordOpen }) {
  return (
    <Query query={GET_SELECTED_NEWBORN}>
      {({ data: { selectedChild, selectedPartner }, client, error }) => {
        const newbornCardList = [];
        if (error) {
          return "error";
        }
        if (loading) {
          for (let i = 0; i < 9; i++) {
            newbornCardList.push(<NewbornCard loading={loading} />);
          }
        } else {
          items.forEach(newborn => {
            const newbornInfo = returnNewbornCardInfo(
              newborn,
              selectedPartner,
              selectedChild
            );

            newbornCardList.push(
              <NewbornCard
                newbornInfo={newbornInfo}
                color={newbornInfo.color}
                onClick={onRecordOpen}
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
        }

        return (
          <CardList
            list={newbornCardList}
            title={title}
            id="newborn-card-list"
          />
        );
      }}
    </Query>
  );
}

export default withRouter(NewbornList);
