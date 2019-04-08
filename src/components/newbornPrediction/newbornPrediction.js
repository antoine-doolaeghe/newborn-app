import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornPredictionContainer } from "./newbornPrediction.style";

function NewbornPrediction(props) {
  const { newbornPredictionLoading, onPredictionClick } = props;
  return (
    <NewbornPredictionContainer>
      {newbornPredictionLoading ? (
        <CircularProgress />
      ) : (
        <button onClick={onPredictionClick}>heloo</button>
      )}
    </NewbornPredictionContainer>
  );
}

export default NewbornPrediction;
