import React from "react";

import { storiesOf } from "@storybook/react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import NewbornSelect from "../../../src/containers/builder/newbornSelect/newbornSelect";

storiesOf("Builder Form", module).add("Empty data", () => (
  <ApolloProvider client={new ApolloClient()}>
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <NewbornSelect></NewbornSelect>
    </div>
  </ApolloProvider>
));
