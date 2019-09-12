import React from "react";

import { storiesOf } from "@storybook/react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import BuilderForm from "../../../src/containers/builder/form/builderForm";

storiesOf("Builder Form", module).add("Newborn Select", () => (
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
      <BuilderForm></BuilderForm>
    </div>
  </ApolloProvider>
));
