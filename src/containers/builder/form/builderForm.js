import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import NewStepButton from "./formPanel/newStepButton/newStepButton";
import TrainButton from "./formPanel/trainButton/trainButton";
import { Wrapper, StyledExpansionPanel } from "./style/builder.style";
import FormPanelSummary from "./formPanel/summary/formPanelSummary";
import FormPanelContent from "./formPanel/content/formPanelContent";
import NewbornSelect from "../newbornSelect/newbornSelect";
import { updateNewborn } from "../../../graphql/mutations";

export const BuilderForm = ({
  trainerId,
  refetch,
  trainerNewborns,
  userNewborns
}) => {
  const [newborns, setNewborns] = useState(trainerNewborns);
  const [steps, setSteps] = useState(["Selected Newborn", "Spawning Agent"]);
  const [activeStep, setActiveStep] = useState(0);
  const returnFormPanelContent = index => {
    switch (index) {
      case 0:
        return (
          <Mutation mutation={gql(updateNewborn)}>
            {(updateNewborn, { data }) => {
              console.log(data);
              const handleNewbornSet = selectedNewborn => {
                console.log(selectedNewborn);
                updateNewborn({
                  variables: {
                    input: {
                      id: selectedNewborn.id,
                      newbornTrainerId: trainerId
                    }
                  }
                });
                refetch();
                setNewborns([...newborns, selectedNewborn]);
              };
              const removeNewborns = selectedNewborn => {
                updateNewborn({
                  variables: {
                    input: { id: selectedNewborn.id, newbornTrainerId: null }
                  }
                });
                setNewborns(
                  newborns.filter(newborn => selectedNewborn !== newborn)
                );
              };
              return (
                <NewbornSelect
                  setNewborns={handleNewbornSet}
                  newborns={newborns}
                  removeNewborns={removeNewborns}
                  userNewborns={userNewborns}
                />
              );
            }}
          </Mutation>
        );
      default:
        return <FormPanelContent index={index} />;
    }
  };

  return (
    <Wrapper>
      {steps.map((step, index) => {
        const isActive = index === activeStep || index === 0 || index === 0;
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
            {returnFormPanelContent(index)}
          </StyledExpansionPanel>
        );
      })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <NewStepButton steps={steps} setSteps={setSteps} />
        <TrainButton trainerId={trainerId} steps={steps} setSteps={setSteps} />
      </div>
    </Wrapper>
  );
};

BuilderForm.propTypes = {
  trainerId: PropTypes.string.isRequired,
  trainerNewborns: PropTypes.array.isRequired,
  userNewborns: PropTypes.array.isRequired
};

export default BuilderForm;
