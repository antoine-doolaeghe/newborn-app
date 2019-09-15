import React from "react";
import PropTypes from "prop-types";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";
import { CreateTrainerCard } from "../../../components/organisms/cards/createTrainerCard";

function TrainerList({ trainers, title, loading, currentUserId }) {
  let newbornCardList = [];
  newbornCardList.push(<CreateTrainerCard currentUserId={currentUserId} />);

  if (loading) {
    for (let i = 0; i < 9; i++) {
      newbornCardList = [...newbornCardList, <TrainerCard loading={loading} />];
    }
  } else {
    const trainerList = trainers.map(trainer => {
      const newborns = trainer.newborns.items || [];
      const subTitle = `${newborns.length} newborns`;
      return (
        <TrainerCard
          title={trainer.title}
          subTitle={subTitle}
          id={trainer.id}
        />
      );
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
  trainers: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default TrainerList;
