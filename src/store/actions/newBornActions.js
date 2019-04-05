import {
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS,
  FETCH_NEWBORNS_REQUEST,
  FETCH_NEWBORNS_FAILURE,
  FETCH_NEWBORNS_SUCCESS,
  FETCH_NEWBORN_REQUEST,
  FETCH_NEWBORN_FAILURE,
  FETCH_NEWBORN_SUCCESS,
  RESET_NEWBORN,
  FETCH_NEWBORN_GENERATIONS_REQUEST,
  FETCH_NEWBORN_GENERATIONS_FAILURE,
  FETCH_NEWBORN_GENERATIONS_SUCCESS,
  FETCH_NEWBORN_GENERATION_REQUEST,
  FETCH_NEWBORN_GENERATION_FAILURE,
  FETCH_NEWBORN_GENERATION_SUCCESS,
  RESET_NEWBORN_GENERATION,
  FETCH_NEWBORN_EPISODES_REQUEST,
  FETCH_NEWBORN_EPISODES_FAILURE,
  FETCH_NEWBORN_EPISODES_SUCCESS,
  FETCH_NEWBORN_EPISODE_REQUEST,
  FETCH_NEWBORN_EPISODE_FAILURE,
  FETCH_NEWBORN_EPISODE_SUCCESS,
  RESET_NEWBORN_EPISODE
} from "./helpers/types";

import * as queries from "../../graphql/queries";
import * as mutation from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export const fetchNewborns = () => async dispatch => {
  dispatch({ type: FETCH_NEWBORNS_REQUEST });
  try {
    const newBornListresponse = await API.graphql(
      graphqlOperation(queries.listNewborns, { limit: 100 })
    );
    dispatch({
      type: FETCH_NEWBORNS_SUCCESS,
      payload: newBornListresponse.data.listNewborns.items
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORNS_FAILURE });
    throw new Error("Could not load the newborn list");
  }
};

export const fetchNewborn = newbornId => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_REQUEST });
  try {
    const newBornResponse = await API.graphql(
      graphqlOperation(queries.getNewborn, { id: newbornId })
    );
    dispatch({
      type: FETCH_NEWBORN_SUCCESS,
      payload: newBornResponse.data.getNewborn
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORN_FAILURE });
    throw new Error("Could not request the born");
  }
};

export const resetNewborn = () => dispatch => {
  dispatch({ type: RESET_NEWBORN });
};

export const fetchNewbornGenerations = () => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_GENERATIONS_REQUEST });
  try {
    const newBornGenerationListResponse = await API.graphql(
      graphqlOperation(queries.listGenerations, {
        filter: { id: { eq: "helo" } }
      })
    );
    dispatch({
      type: FETCH_NEWBORN_GENERATIONS_SUCCESS,
      payload: newBornGenerationListResponse.data
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORN_GENERATIONS_FAILURE });
    throw new Error("Could not request the born episodes");
  }
};

export const fetchNewbornGeneration = generationId => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_GENERATION_REQUEST });
  try {
    const newBornGenerationResponse = await API.graphql(
      graphqlOperation(queries.getGeneration, { id: generationId })
    );
    dispatch({
      type: FETCH_NEWBORN_GENERATION_SUCCESS,
      payload: newBornGenerationResponse.data.getGeneration
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORN_GENERATION_FAILURE });
    throw new Error("Could not request the born generation");
  }
};

export const resetGeneration = () => dispatch => {
  dispatch({ type: RESET_NEWBORN_GENERATION });
};

export const fetchNewbornEpisodes = () => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_EPISODES_REQUEST });
  try {
    const newBornEpisodeListResponse = await API.graphql(
      graphqlOperation(queries.listEpisodes)
    );
    dispatch({
      type: FETCH_NEWBORN_EPISODES_SUCCESS,
      payload: newBornEpisodeListResponse.data
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORN_EPISODES_FAILURE });
    throw new Error("Could not request the born episodes");
  }
};

export const fetchNewbornEpisode = episodeId => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_EPISODE_REQUEST });
  try {
    const newBornEpisodeResponse = await API.graphql(
      graphqlOperation(queries.getEpisode, { id: episodeId })
    );
    dispatch({
      type: FETCH_NEWBORN_EPISODE_SUCCESS,
      payload: newBornEpisodeResponse.data.getEpisode.steps.items
    });
  } catch (error) {
    dispatch({ type: FETCH_NEWBORN_EPISODE_FAILURE });
    throw new Error("Could not request the born episodes");
  }
};

export const updateNewbornOwnership = (
  newbornId,
  currentUserId
) => async dispatch => {
  dispatch({ type: ADD_NEWBORN_TO_USER_REQUEST });
  try {
    const updateNewbornOwnershipResponse = await API.graphql(
      graphqlOperation(mutation.updateNewborn, {
        input: { id: newbornId, newbornOwnerId: currentUserId }
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

export const resetEpisode = () => dispatch => {
  dispatch({ type: RESET_NEWBORN_EPISODE });
};
