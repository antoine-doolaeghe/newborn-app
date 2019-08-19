import React from "react";
import PropTypes from "prop-types";
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

function NewbornList({ title, newborns, loading, onRecordOpen }) {
  const partnerClick = (event, client, id) => {
    event.stopPropagation();
    client.writeData({
      data: {
        selectedPartner: id
      }
    });
  };
  const childClick = (event, client, id) => {
    event.stopPropagation();
    client.writeData({
      data: {
        selectedChild: id
      }
    });
  };
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
          newborns.forEach(newborn => {
            const newbornInfo = returnNewbornCardInfo(
              newborn,
              selectedPartner,
              selectedChild
            );

            newbornCardList.push(
              <NewbornCard
                newbornInfo={newbornInfo}
                onClick={onRecordOpen}
                onPartnerClick={event =>
                  partnerClick(event, client, newbornInfo.id)
                }
                onChildClick={event =>
                  childClick(event, client, newbornInfo.id)
                }
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

NewbornList.propTypes = {
  title: PropTypes.string.isRequired,
  newborns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onRecordOpen: PropTypes.func.isRequired
};

export default withRouter(NewbornList);
