/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  FETCH_NEWBORNS_REQUEST,
  FETCH_NEWBORNS_SUCCESS,
  FETCH_NEWBORN_REQUEST,
  FETCH_NEWBORN_SUCCESS,
  RESET_NEWBORN,
  FETCH_NEWBORN_EPISODES_SUCCESS,
  FETCH_NEWBORN_EPISODES_REQUEST,
  FETCH_NEWBORN_EPISODE_SUCCESS,
  FETCH_NEWBORN_EPISODE_REQUEST,
  RESET_NEWBORN_EPISODE
} from "../actions/helpers/types";

const initialState = {
  newbornList: [],
  newbornInfo: null,
  newbornModelInfo: null,
  newbornInfoLoading: true,
  newbornEpisode: {},
  newbornEpisodeList: [],
  newbornListLoading: false,
  newbornEpisodeListLoading: false,
  newbornLoading: false,
  newbornEpisodeLoading: false,
  isAddNewbornToUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWBORNS_REQUEST:
      return {
        ...state,
        newbornListLoading: true
      };
    case FETCH_NEWBORNS_SUCCESS:
      return {
        ...state,
        newbornList: action.payload,
        newbornListLoading: false
      };
    case FETCH_NEWBORN_REQUEST:
      return {
        ...state,
        newbornInfoLoading: true
      };
    case FETCH_NEWBORN_SUCCESS:
      return {
        ...state,
        newbornInfo: action.payload,
        newbornModelInfo: action.payload.models.items[0],
        newbornInfoLoading: false
      };
    case RESET_NEWBORN:
      return {
        ...state,
        newbornInfo: initialState.newbornInfo,
        newbornInfoLoading: false
      };
    case FETCH_NEWBORN_EPISODES_SUCCESS:
      return {
        ...state,
        newbornList: action.payload,
        newbornEpisodeListLoading: false
      };
    case FETCH_NEWBORN_EPISODES_REQUEST:
      return {
        ...state,
        newbornEpisodeListLoading: true
      };

    case FETCH_NEWBORN_EPISODE_SUCCESS:
      return {
        ...state,
        newbornEpisode: action.payload,
        newbornEpisodeLoading: false
      };
    case FETCH_NEWBORN_EPISODE_REQUEST:
      return {
        ...state,
        newbornEpisodeLoading: true
      };
    case RESET_NEWBORN_EPISODE:
      return {
        ...state,
        newbornEpisode: null,
        newbornEpisodeLoading: false
      };

    default:
      return state;
  }
};
