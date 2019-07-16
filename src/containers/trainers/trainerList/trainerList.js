import React from "react";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";

function TrainerList(props) {
  const { items } = props;

  const newbornCardList = [];
  items.forEach(trainer => {
    newbornCardList.push(<TrainerCard />);
  });
  return <CardList list={newbornCardList} id="newborn-card-list" />;
}

export default TrainerList;
