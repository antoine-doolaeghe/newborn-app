import {
  convertToTensor,
  createModel,
  trainModel,
  testModel
} from "../../tensorflow/tensorflow";

import {
  NEWBORN_PREDICTION_REQUEST,
  NEWBORN_PREDICTION_SUCCESS,
  NEWBORN_PREDICTION_FAILURE,
  RESET_NEWBORN_PREDICTION
} from "./helpers/types";

export const startPredictionTraining = data => async dispatch => {
  dispatch({ type: NEWBORN_PREDICTION_REQUEST });
  try {
    const tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;
    const predictionModel = createModel();
    await trainModel(predictionModel, inputs, labels);
    const predictionResult = await testModel(predictionModel, data, tensorData);
    dispatch({
      type: NEWBORN_PREDICTION_SUCCESS,
      payload: predictionResult
    });
  } catch (error) {
    dispatch({ type: NEWBORN_PREDICTION_FAILURE });
    throw new Error("Could get the newborn prediction");
  }
};

export const resetNewbornPrediction = () => dispatch => {
  dispatch({ type: RESET_NEWBORN_PREDICTION });
};
