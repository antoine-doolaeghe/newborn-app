import { API, graphqlOperation } from "aws-amplify";
import {
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_FAILURE,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_PARENT_GENERATION_REQUEST,
  FETCH_PARENT_GENERATION_FAILURE,
  FETCH_PARENT_GENERATION_SUCCESS
} from "./helpers/types";

import * as queries from "../../graphql/queries";

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
      "Oops, there has been an issue when loading the list of newborn generation"
    );
  }
};

export const fetchParentGeneration = generationID => async dispatch => {
  dispatch({ type: FETCH_PARENT_GENERATION_REQUEST });
  try {
    const parentGenerationResponse = await API.graphql(
      graphqlOperation(queries.getGeneration, {
        id: generationID
      })
    );
    dispatch({
      type: FETCH_PARENT_GENERATION_SUCCESS,
      payload: parentGenerationResponse.data.getGeneration
    });
  } catch (error) {
    dispatch({ type: FETCH_PARENT_GENERATION_FAILURE });
    throw new Error(
      "Oops, there has been an issue when loading parent generation"
    );
  }
};
