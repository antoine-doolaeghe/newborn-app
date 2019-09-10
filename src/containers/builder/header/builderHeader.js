import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import BuilderProgress from "./progress/builderProgress";
import DefaultButton from "../../../components/molecules/buttons/defaultButton/defaultButton";
import { updateTrainer } from "../../../graphql/mutations";

export const BuilderHeader = ({ title, id }) => {
  const [trainerTitle, setTrainerTitle] = useState([title]);
  const [steps, setSteps] = useState(["Spawning Agent"]);
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Mutation mutation={gql(updateTrainer)}>
          {updateTrainer => {
            return (
              <TextField
                style={{ fontSize: 35, fontWeight: 700 }}
                id="standard-name"
                value={trainerTitle}
                onChange={event => {
                  setTrainerTitle(event.target.value);
                }}
                onBlur={event => {
                  updateTrainer({
                    variables: { input: { id, title: event.target.value } }
                  });
                }}
                margin="normal"
              />
            );
          }}
        </Mutation>
        0 step / 200 step
        <BuilderProgress />
        <DefaultButton
          color="primary"
          onClick={() => {
            setSteps([...steps, `Target ${steps.length}`]);
          }}
        >
          Train
        </DefaultButton>
      </Toolbar>
    </AppBar>
  );
};

export default BuilderHeader;
