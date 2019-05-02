/* eslint-disable prettier/prettier */
/* eslint-disable complexity */
import {
  NEWBORN_PREDICTION_REQUEST,
  NEWBORN_PREDICTION_SUCCESS,
  RESET_NEWBORN_PREDICTION
} from "../actions/helpers/types";

const initialState = {
  newbornPrediction: {},
  newbornPredictionLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWBORN_PREDICTION_REQUEST:
      return {
        ...state,
        newbornPredictionLoading: true
      };

    case NEWBORN_PREDICTION_SUCCESS:
      return {
        ...state,
        newbornPrediction: action.payload,
        newbornPredictionLoading: false
      };

    case RESET_NEWBORN_PREDICTION:
      return {
        ...state,
        newbornPrediction: {}
      };
    default:
      return state;
  }
};
