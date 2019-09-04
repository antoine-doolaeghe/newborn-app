import React from "react";
import PropTypes from "prop-types";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";

function TrainerList({ trainers, title, loading }) {
  let newbornCardList = [];

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

export default TrainerList;
