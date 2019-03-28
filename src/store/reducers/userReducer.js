import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS,
} from "../actions/helpers/types";

const initialState = {
  currentUser: null,
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
        currentUser: null,
      }

    default:
      return state
  }
}
