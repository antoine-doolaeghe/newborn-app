import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withAuthenticator } from "aws-amplify-react";
import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as actions from "../../store/actions";

import { FlexContainer } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../theme/snackbars/error.style";

import withHeader from "../header/withHeader";
import NewbornRecordGraph from "../../components/newbornRecordGraph/newbornRecordGraph";
import NewbornRecordHeader from "../../components/newbornRecordHeader/newbornRecordHeader";
import NewBornRecord3dModel from "../../components/newbornRecord3dModel/newbornRecord3dModel";
import NewBornRecordPrediction from "../../components/newbornPrediction/newbornPrediction";

import { returnNewbornRecordInfo } from "../../utils/helpers/newbornGlobalHelpers";
import { returnNewbornPredictionData } from "../../utils/helpers/newbornPredictionHelpers";

const NewBornRecord = props => {
  const {
    newbornInfoLoading,
    newbornPredictionLoading,
    newbornInfo,
    fetchNewborn,
    resetNewbornPrediction,
    location
  } = props;

  const [error, setError] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    const newbornId = location.state.id;
    resetNewbornPrediction();
    fetchNewborn(newbornId, 100).catch(err => {
      setError(err.message);
      setIsErrorOpen(true);
    });
  }, [fetchNewborn, location.state.id, resetNewbornPrediction]);

  const startPredictionTraining = () => {
    const { newbornInfo, startPredictionTraining } = props;
    const predictionData = returnNewbornPredictionData(newbornInfo);
    startPredictionTraining(predictionData);
  };

  const newbornGraphInfo = newbornInfo
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
          <NewBornRecord3dModel
            newbornModelInfo={props.newbornModelInfo}
            data-testid="newbornRecord3dModel"
          />
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

NewBornRecord.defaultPropTypes = defaultPropTypes;

NewBornRecord.propTypes = propTypes;

const mapStateToProps = state => ({
  newbornInfo: state.newBornReducer.newbornInfo,
  newbornModelInfo: state.newBornReducer.newbornModelInfo,
  newbornInfoLoading: state.newBornReducer.newbornInfoLoading,
  newbornPredictionLoading: state.predictionReducer.newbornPredictionLoading
});

export default withAuthenticator(
  withHeader(
    connect(
      mapStateToProps,
      actions
    )(withRouter(NewBornRecord))
  )
);
