import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS
} from "./helpers/types";

import * as mutation from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

import { Auth } from "aws-amplify";

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
