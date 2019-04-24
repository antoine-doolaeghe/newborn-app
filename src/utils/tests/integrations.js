import { applyMiddleware, compose, createStore } from "redux";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-testing-library";
import { Router } from "react-router-dom";
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
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store
  };
}

export { renderWithReduxAndRouter };
