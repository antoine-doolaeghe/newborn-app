import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { render } from "react-dom";

import Amplify from "aws-amplify";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import registerServiceWorker from "./registerServiceWorker";
import aws_config from "./aws-exports";

// Route imports
import GenerationList from "./containers/generations/generationList/generationList";
import NewBornRecord from "./containers/newbornRecord/newbornRecord";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  uri: aws_config.aws_appsync_graphqlEndpoint,
  headers: {
    "X-Api-Key": aws_config.aws_appsync_apiKey
  },
  cache,
  resolvers: {}
});

Amplify.configure(aws_config);

render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={GenerationList} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
