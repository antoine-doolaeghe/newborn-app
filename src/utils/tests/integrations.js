import { applyMiddleware, compose, createStore } from "redux";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";
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
        <BrowserRouter history={history}>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
}

export { renderWithReduxAndRouter };
