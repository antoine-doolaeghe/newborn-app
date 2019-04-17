import { API, graphqlOperation } from "aws-amplify";
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

export const fetchNewborns = newbornSummaryStepLimit => async dispatch => {
  dispatch({ type: FETCH_NEWBORNS_REQUEST });
  try {
    const newBornListresponse = await API.graphql(
      graphqlOperation(queries.listNewborns, {
        limit: 100,
        stepLimit: newbornSummaryStepLimit
      })
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

export const fetchNewborn = (
  newbornId,
  newbornSummaryStepLimit
) => async dispatch => {
  dispatch({ type: FETCH_NEWBORN_REQUEST });
  try {
    const newBornResponse = await API.graphql(
      graphqlOperation(queries.getNewborn, {
        id: newbornId,
        stepLimit: newbornSummaryStepLimit
      })
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

export const resetEpisode = () => dispatch => {
  dispatch({ type: RESET_NEWBORN_EPISODE });
};
