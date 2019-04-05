import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS,
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS
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

export const addNewbornToCurrentUser = (
  newbornId,
  currentUserId
) => async dispatch => {
  dispatch({ type: ADD_NEWBORN_TO_USER_REQUEST });
  try {
    const newBornGenerationListResponse = await API.graphql(
      graphqlOperation(mutation.updateNewborn, {
        input: { id: newbornId, newbornOwnerId: currentUserId }
      })
    );
    dispatch({
      type: ADD_NEWBORN_TO_USER_SUCCESS,
      payload: newBornGenerationListResponse.data
    });
  } catch (error) {
    dispatch({ type: ADD_NEWBORN_TO_USER_FAILURE });
    throw new Error("Could not add the newborn to the current user");
  }
};
