/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS,
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_GENERATION_REQUEST,
  FETCH_GENERATION_SUCCESS,
  FILTER_GENERATION_REQUEST,
  FILTER_GENERATION_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  generationList: [],
  generationListLoading: false,
  isAddNewbornToUserLoading: false,
  generation: {},
  generationNewborns: [],
  generationLoading: false,
  filterGenerationLoading: false
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
        generation: {
          newborns: {
            items: state.generation.newborns.items.map(newborn =>
              newborn.id === action.payload.id ? action.payload : newborn
            )
          }
        },
        isAddNewbornToUserLoading: false
      };

    case ADD_NEWBORN_TO_USER_FAILURE:
      return {
        ...state,
        isAddingNewbornToUser: false
      };

    case FETCH_GENERATIONS_REQUEST:
      return {
        ...state,
        generationListLoading: true
      };

    case FETCH_GENERATIONS_SUCCESS:
      return {
        ...state,
        generationListLoading: false,
        generationList: action.payload
      };

    case FETCH_GENERATION_REQUEST:
      return {
        ...state,
        generationLoading: true
      };

    case FETCH_GENERATION_SUCCESS:
      return {
        ...state,
        generationLoading: false,
        generation: action.payload,
        generationNewborns: action.payload.newborns
          ? action.payload.newborns.items
          : initialState.generationNewborns
      };

    case FILTER_GENERATION_REQUEST:
      return {
        ...state,
        filterGenerationLoading: true
      };

    case FILTER_GENERATION_SUCCESS:
      return {
        ...state,
        filterGenerationLoading: false,
        generation: action.payload,
        generationNewborns: action.payload.newborns
          ? action.payload.newborns.items
          : initialState.generationNewborns
      };

    default:
      return state;
  }
};
