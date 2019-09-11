import React, { useState } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NewStepButton from "./formPanel/newStepButton/newStepButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper, StyledExpansionPanel } from "./style/builder.style";
import FormPanelSummary from "./formPanel/summary/formPanelSummary";
import FormPanelContent from "./formPanel/content/formPanelContent";
import BuilderNewborns from "./newborns/builderNewborns";
import * as queries from "../../../graphql/queries";

export const BuilderForm = ({ trainerId }) => {
  const [steps, setSteps] = useState(["Selected Newborn", "Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  const returnFormPanelContent = (
    index,
    trainerNewborns,
    userNewborns,
    refetch
  ) => {
    switch (index) {
      case 0:
        return (
          <BuilderNewborns
            trainerId={trainerId}
            refetch={refetch}
            trainerNewborns={trainerNewborns}
            userNewborns={userNewborns}
          />
        );
      default:
        return <FormPanelContent index={index} />;
    }
  };

  return (
    <Query
      query={gql(queries.getTrainer)}
      variables={{
        id: trainerId
      }}
    >
      {({ data, loading, refetch }) => {
        const {
          getTrainer: { owner, newborns } = {
            owner: { newborns: {} },
            newborns: {}
          }
        } = data;
        const trainerNewborns = newborns.items;
        const userNewborns = owner.newborns.items;
        return (
          <Wrapper>
            {steps.map((step, index) => {
              const isActive =
                index === activeStep || index === 0 || index === 1;
              return (
                <StyledExpansionPanel expanded={isActive}>
                  <FormPanelSummary
                    index={index}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    setSteps={setSteps}
                    steps={steps}
                    label={step}
                  />
                  {!loading &&
                    returnFormPanelContent(
                      index,
                      trainerNewborns,
                      userNewborns,
                      refetch
                    )}
                </StyledExpansionPanel>
              );
            })}
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
