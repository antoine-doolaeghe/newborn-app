import React from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import * as queries from "../../../../../graphql/queries";
import DefaultButton from "../../../../../components/molecules/buttons/defaultButton/defaultButton";
import { Text } from "../../../../../components/atoms/text";

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
  height: 50px;
`;

export const NewStepButton = ({ client, trainerId }) => {
  return (
    <DefaultButton
      color="primary"
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
      <Text>Train</Text>
    </DefaultButton>
  );
};

export default withApollo(NewStepButton);
