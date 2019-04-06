import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS,
  FETCH_USER_NEWBORNS_REQUEST,
  FETCH_USER_NEWBORNS_FAILURE,
  FETCH_USER_NEWBORNS_SUCCESS
} from "./helpers/types";

import * as queries from "../../graphql/queries";
import { Auth, API, graphqlOperation } from "aws-amplify";

export const fetchSingleUser = () => async dispatch => {
  Auth.currentAuthenticatedUser({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then(user =>
      dispatch({
        type: FETCH_LOGGED_IN_USER_SUCCESS,
        payload: user
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_LOGGED_IN_USER_FAILURE,
        payload: err
      })
    );
};

export const fetchCurrentUserNewborns = userId => async dispatch => {
  dispatch({ type: FETCH_USER_NEWBORNS_REQUEST });
  try {
    const newBornListresponse = await API.graphql(
      graphqlOperation(queries.getUser, { id: userId })
    );
    dispatch({
      type: FETCH_USER_NEWBORNS_SUCCESS,
      payload: newBornListresponse.data.getUser.newborns.items
    });
  } catch (error) {
    dispatch({ type: FETCH_USER_NEWBORNS_FAILURE });
    throw new Error("Could not load the current user borns");
  }
};
