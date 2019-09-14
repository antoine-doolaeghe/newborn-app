import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NewStepButton from "./formPanel/createLevelButton/createLevelButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper } from "./style/builderForm.style";
import BuilderNewborns from "./newborns/builderNewborns";
import * as queries from "../../../graphql/queries";
import LevelForm from "./formPanel/level/levelForm";

export const BuilderForm = ({ trainerId }) => {
  const returnFormPanelContent = (levels, refetch) => {
    return levels.map(level => {
      return <LevelForm id={level.id} index={level} refetch={refetch} />;
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
        const trainerNewborns = newborns.items;
        const userNewborns = owner.newborns.items;

        return (
          <Wrapper>
            <BuilderNewborns
              trainerId={trainerId}
              refetch={refetch}
              trainerNewborns={trainerNewborns}
              userNewborns={userNewborns}
            />
            {returnFormPanelContent(trainerLevels, refetch)}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <NewStepButton trainerId={trainerId} refetch={refetch} />
              <TrainButton trainerId={trainerId} />
            </div>
          </Wrapper>
        );
      }}
    </Query>
  );
};

BuilderForm.propTypes = {
  trainerId: PropTypes.string.isRequired
};

export default BuilderForm;
