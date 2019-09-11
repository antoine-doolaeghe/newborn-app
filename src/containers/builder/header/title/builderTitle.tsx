import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { updateTrainer } from "../../../../graphql/mutations";

interface IBuilderTitleProps {
  title: string;
  id: string;
}

export const BuilderTitle = ({
  title,
  id
}: IBuilderTitleProps): React.ReactElement => {
  const [builderTitle, setBuilderTitle] = useState(title);
  return (
    <Mutation mutation={gql(updateTrainer)}>
      {updateTrainer => {
        return (
          <TextField
            style={{ fontSize: 35, fontWeight: 700 }}
            id="standard-name"
            value={builderTitle}
            onChange={event => {
              setBuilderTitle(event.target.value);
            }}
            onBlur={event => {
              updateTrainer({
                variables: {
                  input: { id, title: event.target.value }
                }
              });
            }}
            margin="normal"
          />
        );
      }}
    </Mutation>
  );
};

export default BuilderTitle;
