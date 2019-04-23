/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS,
  FETCH_GENERATIONS_REQUEST,
  FETCH_GENERATIONS_SUCCESS,
  FETCH_PARENT_GENERATION_REQUEST,
  FETCH_PARENT_GENERATION_SUCCESS,
  FETCH_CHILD_GENERATION_REQUEST,
  FETCH_CHILD_GENERATION_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  childGeneration: [],
  childGenerationLoading: false,
  generationList: [],
  generationListLoading: false,
  isAddNewbornToUserLoading: false,
  parentGeneration: {},
  parentGenerationLoading: false
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
        parentGeneration: {
          newborns: {
            items: state.parentGeneration.newborns.items.map(newborn =>
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
