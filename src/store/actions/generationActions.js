import { API, graphqlOperation } from "aws-amplify";
import {
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS,
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_FAILURE,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_GENERATION_REQUEST,
  FETCH_GENERATION_FAILURE,
  FETCH_GENERATION_SUCCESS,
  FILTER_GENERATION_REQUEST,
  FILTER_GENERATION_SUCCESS,
  FILTER_GENERATION_FAILURE
} from "./helpers/types";

import * as queries from "../../graphql/queries";
import * as mutation from "../../graphql/mutations";

export const updateNewbornOwnership = (
  newbornId,
  currentUserId,
  newbornSummaryStepLimit
) => async dispatch => {
  dispatch({ type: ADD_NEWBORN_TO_USER_REQUEST });
  try {
    const updateNewbornOwnershipResponse = await API.graphql(
      graphqlOperation(mutation.updateNewborn, {
        input: { id: newbornId, newbornOwnerId: currentUserId },
        stepLimit: newbornSummaryStepLimit
      })
    );
    dispatch({
      type: ADD_NEWBORN_TO_USER_SUCCESS,
      payload: updateNewbornOwnershipResponse.data.updateNewborn
    });
  } catch (error) {
    dispatch({ type: ADD_NEWBORN_TO_USER_FAILURE });
    throw new Error("Could not add the newborn to the current user");
  }
};

export const fetchGenerations = () => async dispatch => {
  dispatch({ type: FETCH_GENERATIONS_REQUEST });
  try {
    const generationListresponse = await API.graphql(
      graphqlOperation(queries.listGenerations)
    );
    dispatch({
      type: FETCH_GENERATIONS_SUCCESS,
      payload: generationListresponse.data.listGenerations.items
    });
  } catch (error) {
    dispatch({ type: FETCH_GENERATIONS_FAILURE });
    throw new Error(
      `Oops, there has been an issue when loading the list of newborn generation${error}`
    );
  }
};

export const fetchGeneration = (
  id,
  newbornLimit,
  stepLimit
) => async dispatch => {
  dispatch({ type: FETCH_GENERATION_REQUEST });
  try {
    const generationResponse = await API.graphql(
      graphqlOperation(queries.getGeneration, {
        id,
        newbornLimit,
        stepLimit
      })
    );
    dispatch({
      type: FETCH_GENERATION_SUCCESS,
      payload: generationResponse.data.getGeneration
    });
  } catch (error) {
    dispatch({ type: FETCH_GENERATION_FAILURE });
    throw new Error(
      `Oops, there has been an issue when loading parent generation ${JSON.stringify(
        error
      )}`
    );
  }
};

export const filterGeneration = (
  id,
  partnerFilter,
  newbornLimit,
  stepLimit
) => async dispatch => {
  dispatch({ type: FILTER_GENERATION_REQUEST });
  try {
    const generationResponse = await API.graphql(
      graphqlOperation(queries.getFilteredGeneration, {
        id,
        partnerFilter,
        newbornLimit,
        stepLimit
      })
    );
    dispatch({
      type: FILTER_GENERATION_SUCCESS,
      payload: generationResponse.data.getGeneration
    });
  } catch (error) {
    dispatch({ type: FILTER_GENERATION_FAILURE });
    throw new Error(
      `Oops, there has been an issue when loading parent generation ${JSON.stringify(
        error
      )}`
    );
  }
};
