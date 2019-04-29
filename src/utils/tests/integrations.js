import { createMemoryHistory } from "history";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-testing-library";
import configureStore from "../../store/store";

function renderWithReduxAndRouter(
  ui,
  {
    initialState,
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  const store = configureStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>{ui}</Switch>
        </ConnectedRouter>
      </Provider>
    ),
    store
  };
}

export { renderWithReduxAndRouter };
