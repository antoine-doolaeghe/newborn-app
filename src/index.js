import React from "react";

import { Route, Switch } from "react-router";
import configureStore, { history } from "./store/store";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Amplify from "aws-amplify";
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
      <MuiThemeProvider theme={MuiTheme}>
        <Switch>
          <Route exact path="/" component={NewbornList} />
          <Route exact path="/newborn-record/:id" component={NewBornRecord} />
          <Route exact path="/my-born" component={MyBorn} />
          <Route exact path="/academy" component={Academy} />
          <Route exact path="/live" component={Live} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
