import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withAuthenticator } from "aws-amplify-react";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

import { FlexContainer } from "../../theme/grid.style";
import { ErrorDialog } from "../../theme/error.style";

import withHeader from "../header/withHeader";
import NewbornRecordGraph from "../../components/newbornRecordGraph/newbornRecordGraph";
import NewbornRecordHeader from "../../components/newbornRecordHeader/newbornRecordHeader";
import NewBornRecord3dModel from "../../components/newbornRecord3dModel/newbornRecord3dModel";
import NewBornRecordPrediction from "../../components/newbornPrediction/newbornPrediction";

import { returnNewbornRecordInfo } from "../../utils/helpers/newbornGlobalHelpers";
import { returnNewbornPredictionData } from "../../utils/helpers/newbornPredictionHelpers";
import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

const NewBornRecord = props => {
  const {
    newbornInfoLoading,
    newbornPredictionLoading,
    newbornPrediction,
    newbornInfo
  } = props;

  const [error, setError] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    const { newbornInfo, fetchNewborn, resetNewbornPrediction } = props;
    const newbornId = new URLSearchParams(props.location.search).get(
      "newborn_id"
    );
    console.log(newbornId);
    resetNewbornPrediction();
    if (!newbornInfo && newbornId) {
      fetchNewborn(newbornId, 100).catch(err => {
        setError(err.message);
        setIsErrorOpen(true);
      });
    }
  }, []);

  const startPredictionTraining = () => {
    const { newbornInfo, startPredictionTraining } = props;
    const predictionData = returnNewbornPredictionData(newbornInfo);
    startPredictionTraining(predictionData);
  };

  const newbornGraphInfo = props.newbornInfo
    ? returnNewbornRecordInfo(props.newbornInfo)
    : null;

  return (
    <React.Fragment>
      <FlexContainer>
        <FlexContainer
          direction="column"
          width="500px"
          max-width="500px"
          margin="10px"
        >
          <NewbornRecordHeader data-testid="newbornRecordHeader" />
          <NewBornRecord3dModel data-testid="newbornRecord3dModel" />
        </FlexContainer>
        <FlexContainer
          direction="column"
          width="500px"
          max-width="500px"
          margin="10px"
        >
          <NewbornRecordGraph
            newbornInfoLoading={newbornInfoLoading}
            data-testid="newbornRecordGraph"
            newbornInfo={newbornGraphInfo}
          />
          <NewBornRecordPrediction
            data-testid="newBornRecordPrediction"
            newbornPredictionLoading={newbornPredictionLoading}
            onPredictionClick={startPredictionTraining}
          />
        </FlexContainer>
      </FlexContainer>
      <ErrorDialog open={isErrorOpen} message={error} />
    </React.Fragment>
  );
};

NewBornRecord.propTypes = {
  fetchNewborn: PropTypes.func.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  newbornInfoLoading: PropTypes.bool.isRequired,
  newbornPrediction: PropTypes.array,
  newbornPredictionLoading: PropTypes.bool.isRequired,
  resetNewbornPrediction: PropTypes.func.isRequired,
  startPredictionTraining: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  newbornInfo: state.newBornReducer.newbornInfo,
  newbornInfoLoading: state.newBornReducer.newbornInfoLoading,
  newbornPrediction: state.predictionReducer.newbornPrediction,
  newbornPredictionLoading: state.predictionReducer.newbornPredictionLoading
});

export default withAuthenticator(
  withHeader(
    withRouter(
      connect(
        mapStateToProps,
        actions
      )(NewBornRecord)
    )
  )
);
