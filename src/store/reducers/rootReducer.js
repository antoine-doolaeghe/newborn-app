import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import newBornReducer from "./newBornReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import predictionReducer from "./predictionReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    newBornReducer,
    userReducer,
    usersReducer,
    predictionReducer
  });
