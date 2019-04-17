/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_GENERATION_REQUEST,
  FETCH_GENERATION_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  generationList: [],
  generationListLoading: false,
  currentGeneration: {},
  currentGenerationLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENERATIONS_REQUEST:
      return {
        ...state,
        generationListLoading: true
      };

    case FETCH_GENERATIONS_SUCCESS:
      return {
        ...state,
        isAddNewbornToUserLoading: true
      };

    case FETCH_GENERATION_REQUEST:
      return {
        ...state,
        currentGenerationLoading: true
      };

    case FETCH_GENERATION_SUCCESS:
      return {
        ...state,
        currentGenerationLoading: false,
        currentGeneration: action.payload
      };

    default:
      return state;
  }
};
