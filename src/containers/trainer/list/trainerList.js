import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Mutation } from "react-apollo";
import TrainerCard from "../../../components/organisms/cards/trainerCard/trainerCard";
import CardList from "../../../components/organisms/lists/cardList/cardList";
import { CreateTrainerCard } from "../../../components/organisms/cards/createTrainerCard";

const CREATE_TRAINER = gql`
  mutation CreateTrainer($id: ID!) {
    createTrainer(input: { id: $id }) {
      id
    }
  }
`;

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
      <Mutation mutation={CREATE_TRAINER}>
        {(addTodo, { data }) => <CreateTrainerCard onCreateClick={addTodo} />}
      </Mutation>
    );
  }

  return (
    <CardList title={title} list={newbornCardList} id="newborn-card-list" />
  );
}

export default TrainerList;
