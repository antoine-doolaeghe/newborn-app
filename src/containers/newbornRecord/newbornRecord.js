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

import {
  NewbornRecordGraph,
  NewbornRecordHeader,
  NewbornRecord3dModel,
  NewbornPrediction
} from "../../components/newbornRecord";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewBornRecord = props => {
  const {
    newbornInfoLoading,
    newbornPredictionLoading,
    newbornInfo,
    fetchNewborn,
    subscribeNewborn,
    location
  } = props;

  const [error, setError] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    const newbornId = location.state.id;
    fetchNewborn(newbornId, 400).catch(err => {
      setError(err.message);
      setIsErrorOpen(true);
    });
    subscribeNewborn(newbornId);
  }, [fetchNewborn, location.state.id, subscribeNewborn]);

  const newbornRecordInfo = newbornInfo
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
          <NewbornRecordHeader
            newbornInfo={newbornRecordInfo}
            data-testid="newbornRecordHeader"
          />
          <NewbornRecord3dModel
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
            newbornInfo={newbornRecordInfo}
          />
          <NewbornPrediction
            data-testid="newBornRecordPrediction"
            newbornPredictionLoading={newbornPredictionLoading}
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
