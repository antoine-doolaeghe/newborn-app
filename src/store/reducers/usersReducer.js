import {
  FETCH_ALL_USERS_FAILURE,
  FETCH_ALL_USERS_SUCCESS,
  REQUEST_ALL_USERS,
} from "../actions/helpers/types";

const initialState = {
  allUsers: [],
  allUsersLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        allUsersLoading: false
      };

    case FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        allUsers: null,
        allUsersLoading: false
      };

    case REQUEST_ALL_USERS:
      return {
        ...state,
        allUsersLoading: true
      };

    default:
      return state
  }
}
