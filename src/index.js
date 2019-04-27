import React from "react";

import { Switch, Route } from "react-router";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Amplify from "aws-amplify";
import configureStore, { history } from "./store/store";
import registerServiceWorker from "./registerServiceWorker";
import aws_config from "./aws-exports";

// Route imports
import Academy from "./containers/academy/academy";
import NewbornList from "./containers/newbornList/newbornList";
import Live from "./containers/live/live";
import MyBorn from "./containers/myBorn/myBorn";
import NewBornRecord from "./containers/newbornRecord/newbornRecord";
import MuiTheme from "./utils/jss/MuiTheme";

const store = configureStore(/* provide initial state if any */);

// configure the amplify local config
Amplify.configure(aws_config);
const openDrawer = false;

localStorage.openDrawer = openDrawer;

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={NewbornList} />
        <Route
          path="/newborn-record"
          component={props => <NewBornRecord {...props} />}
        />
        <Route path="/my-born" component={MyBorn} />
        <Route path="/academy" component={Academy} />
        <Route path="/live" component={Live} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
