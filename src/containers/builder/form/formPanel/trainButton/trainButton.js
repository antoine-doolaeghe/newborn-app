import React from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
// import gql from "graphql-tag";
// import * as queries from "../../../../../graphql/queries";
import { Button } from "../../../../../components/molecules/buttons";
import { Text } from "../../../../../components/atoms/text";

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
  height: 50px;
`;

export const NewStepButton = () => {
  return (
    <Button
      color="primary"
      onClick={async () => {
        // LEFT COMMENTED TO AVOID UNINTED LAUNCH OF EC2
        // await client.query({
        // query: gql(queries.trainNewborn),
        // variables: {
        // newbornId: "132449966688712208",
        // trainerId: { trainerId }
        // }
        // });
      }}
    >
      <Text>Train</Text>
    </Button>
  );
};

export default withApollo(NewStepButton);
