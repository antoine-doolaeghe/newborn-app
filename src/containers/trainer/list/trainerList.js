import React from "react";
import gql from "graphql-tag";
import { Mutation, Subscription } from "react-apollo";
import { withRouter } from "react-router-dom";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";
import { CreateTrainerCard } from "../../../components/organisms/cards/createTrainerCard";

const CREATE_TRAINER = gql`
  mutation CreateTrainer($title: String!, $trainerOwnerId: ID!) {
    createTrainer(input: { title: $title, trainerOwnerId: $trainerOwnerId }) {
      title
    }
  }
`;

function TrainerList(props) {
  const { history, items, title, loading, currentUserId } = props;
  const displayAddNewTrainerCard = true;
  const newbornCardList = [];

  if (loading) {
    for (let i = 0; i < 9; i++) {
      newbornCardList.push(<TrainerCard loading={loading} />);
    }
  } else {
    items.forEach(item => {
      newbornCardList.push(<TrainerCard title={item.title} />);
    });
  }

  if (displayAddNewTrainerCard) {
    newbornCardList.push(
      <Mutation mutation={CREATE_TRAINER}>
        {(createTrainer, { data, loading }) => {
          if (data && data.createTrainer) {
            history.push("./builder");
          }
          return (
            <CreateTrainerCard
              currentUserId={currentUserId}
              onCreateClick={createTrainer}
            />
          );
        }}
      </Mutation>
    );
  }

  return (
    <CardList title={title} list={newbornCardList} id="newborn-card-list" />
  );
}

export default withRouter(TrainerList);
