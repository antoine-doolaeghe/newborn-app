/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS,
  FETCH_NEWBORNS_REQUEST,
  FETCH_NEWBORNS_SUCCESS,
  FETCH_NEWBORN_REQUEST,
  FETCH_NEWBORN_SUCCESS,
  RESET_NEWBORN,
  FETCH_NEWBORN_GENERATION_REQUEST,
  FETCH_NEWBORN_GENERATION_SUCCESS,
  RESET_NEWBORN_GENERATION,
  FETCH_NEWBORN_EPISODES_SUCCESS,
  FETCH_NEWBORN_EPISODES_REQUEST,
  FETCH_NEWBORN_EPISODE_SUCCESS,
  FETCH_NEWBORN_EPISODE_REQUEST,
  RESET_NEWBORN_EPISODE
} from "../actions/helpers/types";

const initialState = {
  newbornList: [],
  newbornInfo: null,
  newbornInfoLoading: false,
  newbornGenerationList: [],
  newbornGenerationLoading: false,
  newbornGeneration: null,
  newbornEpisode: null,
  newbornEpisodeList: [],
  newbornListLoading: false,
  newbornEpisodeListLoading: false,
  newbornLoading: false,
  newbornEpisodeLoading: false,
  isAddNewbornToUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWBORN_TO_USER_REQUEST:
      return {
        ...state,
        isAddNewbornToUserLoading: true
      };

    case ADD_NEWBORN_TO_USER_SUCCESS:
      return {
        ...state,
        newbornList: state.newbornList.map(newborn =>
          newborn.id === action.payload.id ? action.payload : newborn
        ),
        isAddNewbornToUserLoading: false
      };

    case ADD_NEWBORN_TO_USER_FAILURE:
      return {
        ...state,
        isAddingNewbornToUser: false
      };
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
        newbornInfoLoading: false
      };
    case RESET_NEWBORN:
      return {
        ...state,
        newbornInfo: initialState.newbornInfo,
        newbornInfoLoading: false
      };
    case FETCH_NEWBORN_GENERATION_REQUEST:
      return {
        ...state,
        newbornGenerationLoading: true
      };
    case FETCH_NEWBORN_GENERATION_SUCCESS:
      return {
        ...state,
        newbornGeneration: action.payload,
        newbornGenerationLoading: false
      };
    case RESET_NEWBORN_GENERATION:
      return {
        ...state,
        newbornGeneration: null,
        newbornGenerationLoading: false
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
