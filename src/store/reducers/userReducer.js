import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS,
  ADD_NEWBORN_TO_USER_REQUEST,
  ADD_NEWBORN_TO_USER_FAILURE,
  ADD_NEWBORN_TO_USER_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  currentUser: null,
  isAddNewbornToUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };

    case FETCH_LOGGED_IN_USER_FAILURE:
      return {
        ...state,
        currentUser: null
      };

    case ADD_NEWBORN_TO_USER_REQUEST:
      return {
        ...state,
        isAddNewbornToUserLoading: true
      };

    case ADD_NEWBORN_TO_USER_SUCCESS:
      return {
        ...state,
        isAddNewbornToUserLoading: false
      };

    case ADD_NEWBORN_TO_USER_FAILURE:
      return {
        ...state,
        isAddingNewbornToUser: false
      };

    default:
      return state;
  }
};
