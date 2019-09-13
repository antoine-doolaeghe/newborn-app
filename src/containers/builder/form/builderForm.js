import React, { useState } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NewStepButton from "./formPanel/newStepButton/newStepButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper } from "./style/builder.style";
import BuilderNewborns from "./newborns/builderNewborns";
import * as queries from "../../../graphql/queries";
import TargetForm from "./formPanel/target/targetForm";

export const BuilderForm = ({ trainerId }) => {
  const [steps, setSteps] = useState(["Selected Newborn"]);
  // const [activeStep, setActiveStep] = useState(0);
  const returnFormPanelContent = levels => {
    return levels.map(level => {
      return <TargetForm index={level} />;
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
        console.log(trainerLevels);
        return (
          <Wrapper>
            <BuilderNewborns
              trainerId={trainerId}
              refetch={refetch}
              trainerNewborns={trainerNewborns}
              userNewborns={userNewborns}
            />
            {returnFormPanelContent(trainerLevels)}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <NewStepButton steps={steps} setSteps={setSteps} />
              <TrainButton
                trainerId={trainerId}
                steps={steps}
                setSteps={setSteps}
              />
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
