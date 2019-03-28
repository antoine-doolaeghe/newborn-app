/* global ROOT_URI */
// Note: ROOT_URI is injected during deployment

// Create final store using all reducers and applying middleware
import { createBrowserHistory } from "history";
import { compose, createStore, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import reducers from "./reducers/rootReducer";

// Configure reducer to store state at state.router
export const BASENAME =
  typeof ROOT_URI !== "undefined" && ROOT_URI !== null
    ? ROOT_URI !== "/" && ROOT_URI !== ""
      ? `/${ROOT_URI}/`
      : "/"
    : "/";
export const history = createBrowserHistory();

const store = compose(
  applyMiddleware(routerMiddleware(history), thunkMiddleware, createLogger),
  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(connectRouter(history)(reducers));

export default store;
