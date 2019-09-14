import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NewStepButton from "./formPanel/createLevelButton/createLevelButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper, ButtonWrapper } from "./style/builderForm.style";
import BuilderNewborns from "./newborns/builderNewborns";
import * as queries from "../../../graphql/queries";
import LevelForm from "./formPanel/level/levelForm";

interface IBuilderFormProps {
  trainerId: string;
}

export const BuilderForm = ({ trainerId }: IBuilderFormProps) => {
  const returnBuilderLevel = (levels, refetch) => {
    return levels.map((level, index) => {
      return <LevelForm id={level.id} index={index} refetch={refetch} />;
    });
  };

  return (
    <Query
      query={gql(queries.getTrainer)}
      variables={{
        id: trainerId
      }}
    >
      {({ data, refetch }) => {
        const {
          getTrainer: { owner, newborns, levels } = {
            owner: { newborns: {} },
            newborns: {},
            levels: {}
          }
        } = data;
        const trainerLevels = levels.items || [];
        const trainerNewborns = newborns.items || [];
        const userNewborns = owner.newborns.items || [];

        return (
          <Wrapper>
            <BuilderNewborns
              refetch={refetch}
              trainerId={trainerId}
              trainerNewborns={trainerNewborns}
              userNewborns={userNewborns}
            />
            {returnBuilderLevel(trainerLevels, refetch)}
            <ButtonWrapper>
              <NewStepButton trainerId={trainerId} refetch={refetch} />
              <TrainButton trainerId={trainerId} />
            </ButtonWrapper>
          </Wrapper>
        );
      }}
    </Query>
  );
};

export default BuilderForm;
