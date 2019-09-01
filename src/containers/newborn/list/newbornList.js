import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewbornListHeader from "./title/newbornListHeader";
import { returnNewbornCardInfo } from "./utils/newbornList_helpers";
import { CardList } from "../../../components/organisms/lists";
import { NewbornCard } from "../../../components/organisms/cards";

const GET_SELECTED_NEWBORN = gql`
  {
    selectedPartner @client
    selectedChild @client
  }
`;

function NewbornList({ newborns, index, loading, onRecordOpen }) {
  const [expanded, setExpanded] = useState(true);
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
        const cardList = [];
        if (error) {
          return "error";
        }
        if (loading) {
          for (let i = 0; i < 9; i++) {
            cardList.push(<NewbornCard loading={loading} />);
          }
        } else {
          newborns.forEach(newborn => {
            const newbornInfo = returnNewbornCardInfo(
              newborn,
              selectedPartner,
              selectedChild
            );

            cardList.push(
              <NewbornCard
                key={newbornInfo.id}
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
            expanded={expanded}
            list={cardList}
            title={
              <NewbornListHeader
                title={index}
                newbornNumber={newborns.length}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            }
            id="newborn-card-list"
          />
        );
      }}
    </Query>
  );
}

NewbornList.defaultProps = {
  newborns: []
};

NewbornList.propTypes = {
  newborns: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  onRecordOpen: PropTypes.func.isRequired
};

export default withRouter(NewbornList);
