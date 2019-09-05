import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
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

function TrainerList({ history, trainers, title, loading, currentUserId }) {
  let newbornCardList = [];
  newbornCardList.push(
    <Mutation mutation={CREATE_TRAINER}>
      {(createTrainer, { data }) => {
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

  if (loading) {
    for (let i = 0; i < 9; i++) {
      newbornCardList = [...newbornCardList, <TrainerCard loading={loading} />];
    }
  } else {
    const trainerList = trainers.map(trainer => {
      return <TrainerCard title={trainer.title} id={trainer.id} />;
    });
    newbornCardList = [...newbornCardList, ...trainerList];
  }

  return (
    <CardList
      title={title}
      expanded
      list={newbornCardList}
      id="newborn-card-list"
    />
  );
}

TrainerList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  trainers: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withRouter(TrainerList);
