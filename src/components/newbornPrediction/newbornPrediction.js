import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NewbornPredictionContainer } from './newbornPrediction.style';

function NewbornPrediction() {
  return (
    <NewbornPredictionContainer>
      {true && //props.newbornInfoLoading ? 
        <CircularProgress />
      }
    </NewbornPredictionContainer>
  );
}

export default NewbornPrediction;
