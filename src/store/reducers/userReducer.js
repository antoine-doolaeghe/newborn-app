import {
  FETCH_LOGGED_IN_USER_FAILURE,
  FETCH_LOGGED_IN_USER_SUCCESS,
  FETCH_USER_NEWBORNS_REQUEST,
  FETCH_USER_NEWBORNS_SUCCESS
} from "../actions/helpers/types";

const initialState = {
  currentUser: null,
  currentUserNewbornList: [],
  currentUserNewbornListLoading: true
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

    case FETCH_USER_NEWBORNS_REQUEST:
      return {
        ...state,
        currentUserNewbornListLoading: true
      };
    case FETCH_USER_NEWBORNS_SUCCESS:
      return {
        ...state,
        currentUserNewbornList: action.payload,
        currentUserNewbornListLoading: false
      };

    default:
      return state;
  }
};
