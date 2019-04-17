import { API, graphqlOperation } from "aws-amplify";
import {
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_FAILURE,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_GENERATION_REQUEST,
  FETCH_GENERATION_FAILURE,
  FETCH_GENERATION_SUCCESS
} from "./helpers/types";

import * as queries from "../../graphql/queries";

export const fetchGenerations = () => async dispatch => {
  dispatch({ type: FETCH_GENERATIONS_REQUEST });
  try {
    const generationListresponse = await API.graphql(
      graphqlOperation(queries.listGenerations)
    );
    dispatch({
      type: FETCH_GENERATIONS_FAILURE,
      payload: generationListresponse.data.listGenerations.items
    });
  } catch (error) {
    dispatch({ type: FETCH_GENERATIONS_SUCCESS });
    throw new Error("Could not load the generation list");
  }
};

export const fetchGeneration = generationID => async dispatch => {
  dispatch({ type: FETCH_GENERATION_REQUEST });
  try {
    const newBornResponse = await API.graphql(
      graphqlOperation(queries.getNewborn, {
        id: generationID
      })
    );
    dispatch({
      type: FETCH_GENERATION_SUCCESS,
      payload: newBornResponse.data.getNewborn
    });
  } catch (error) {
    dispatch({ type: FETCH_GENERATION_FAILURE });
    throw new Error("Could not request the generation");
  }
};
