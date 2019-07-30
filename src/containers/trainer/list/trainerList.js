import React, { useEffect } from "react";
import Build from "@material-ui/icons/Build";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";
import IconButton from "../../../components/molecules/buttons/iconButton/iconButton";

function TrainerList(props) {
  const { items, title, loading } = props;
  const displayAddNewTrainerCard = true;
  const newbornCardList = [];

  if (loading) {
    for (let i = 0; i < 9; i++) {
      newbornCardList.push(<TrainerCard loading={loading} />);
    }
  } else {
    items.forEach(() => {
      newbornCardList.push(<TrainerCard />);
    });
  }

  if (displayAddNewTrainerCard) {
    newbornCardList.push(
      <IconButton width="220px" height="220px" color="light">
        <Build />
      </IconButton>
    );
  }

  return (
    <CardList title={title} list={newbornCardList} id="newborn-card-list" />
  );
}

export default TrainerList;
