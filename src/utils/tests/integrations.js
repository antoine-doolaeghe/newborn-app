import { createMemoryHistory } from "history";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../store/store";

function renderWithReduxAndRouter(
  ui,
  {
    initialState,
    store = configureStore(initialState),
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <BrowserRouter history={history}>{ui}</BrowserRouter>
          </Switch>
        </ConnectedRouter>
      </Provider>
    ),
    store
  };
}

export { renderWithReduxAndRouter };
