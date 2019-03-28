import React from 'react';
import registerServiceWorker from './registerServiceWorker';

import { Route, Switch } from 'react-router';
import store, { history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Amplify from 'aws-amplify';
import aws_config from './aws-exports';

// Route imports
import Academy from './components/academy/academy';
import Home from './components/home/home';
import Live from './components/live/live';
import MyBorn from './components/myBorn/myBorn';
import NewBornRecord from './components/newBornRecord/newBornRecord';
import MuiTheme from './utils/jss/MuiTheme';

// configure the amplify local config
Amplify.configure(aws_config);
const openDrawer = false;

localStorage.openDrawer = openDrawer;

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={MuiTheme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newborn-record/:id" component={NewBornRecord} />
          <Route exact path="/my-born" component={MyBorn} />
          <Route exact path="/academy" component={Academy} />
          <Route exact path="/live" component={Live} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
