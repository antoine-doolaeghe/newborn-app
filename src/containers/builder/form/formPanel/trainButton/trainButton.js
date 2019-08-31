import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import * as queries from "../../../../../graphql/queries";

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
  height: 50px;
`;

export const NewStepButton = ({ client, step, trainerId }) => {
  return (
    <ExpansionPanel
      style={{
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
      }}
      onClick={async () => {
        await client.query({
          query: gql(queries.trainNewborn),
          variables: {
            newbornId: "132449966688712208",
            trainerId: { trainerId }
          }
        });
      }}
    >
      <Heading>{step}</Heading>
    </ExpansionPanel>
  );
};

export default withApollo(NewStepButton);
