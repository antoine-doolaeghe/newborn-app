import { API, graphqlOperation } from "aws-amplify";
import {
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
  RESET_NEWBORN_EPISODE,
  SUBSCRIBE_NEWBORN_SUCCESS
} from "./helpers/types";

import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";

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

export const subscribeNewborn = newbornId => async dispatch => {
  API.graphql(graphqlOperation(subscriptions.onUpdateNewborn)).subscribe({
    next: newborn => {
      if (newborn.value.data.onUpdateNewborn.id === newbornId) {
        dispatch({
          type: SUBSCRIBE_NEWBORN_SUCCESS,
          payload: newborn.value.data.onUpdateNewborn.models.items[0].episodes
        });
      }
    }
  });
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

export const resetEpisode = () => dispatch => {
  dispatch({ type: RESET_NEWBORN_EPISODE });
};
