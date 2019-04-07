import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornPredictionContainer } from "./newbornPrediction.style";

function NewbornPrediction(props) {
  return (
    <NewbornPredictionContainer>
      <button
        onClick={() => {
          props.onPredictionClick();
        }}
      >
        heloo
      </button>
    </NewbornPredictionContainer>
  );
}

export default NewbornPrediction;
