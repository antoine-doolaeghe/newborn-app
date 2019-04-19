/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_PARENT_GENERATION_REQUEST,
  FETCH_PARENT_GENERATION_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  generationList: [],
  generationListLoading: false,
  parentGeneration: {},
  parentGenerationLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENERATIONS_REQUEST:
      return {
        ...state,
        generationListLoading: true
      };

    case FETCH_GENERATIONS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        generationListLoading: false,
        generationList: action.payload
      };

    case FETCH_PARENT_GENERATION_REQUEST:
      return {
        ...state,
        parentGenerationLoading: true
      };

    case FETCH_PARENT_GENERATION_SUCCESS:
      return {
        ...state,
        parentGenerationLoading: false,
        parentGeneration: action.payload
      };

    default:
      return state;
  }
};
