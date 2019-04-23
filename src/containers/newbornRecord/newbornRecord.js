import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withAuthenticator } from "aws-amplify-react";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

import { FlexContainer } from "../../theme/grid.style";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";
import NewbornRecordGraph from "../../components/newbornRecordGraph/newbornRecordGraph";
import NewbornRecordHeader from "../../components/newbornRecordHeader/newbornRecordHeader";
import NewBornRecord3dModel from "../../components/newbornRecord3dModel/newbornRecord3dModel";
import NewBornRecordPrediction from "../../components/newbornPrediction/newbornPrediction";
import { returnNewbornPredictionData } from "../../utils/helpers/newbornPredictionHelpers";

import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

class NewBornRecord extends Component {
  componentWillMount() {
    const {
      newbornInfo,
      fetchNewborn,
      match,
      resetNewbornPrediction
    } = this.props;
    resetNewbornPrediction();
    if (!newbornInfo || newbornInfo.id !== match.params.id) {
      fetchNewborn(match.params.id, 100);
    }
  }

  startPredictionTraining = () => {
    const { newbornInfo, startPredictionTraining } = this.props;
    const predictionData = returnNewbornPredictionData(newbornInfo);
    startPredictionTraining(predictionData);
  };

  render() {
    const {
      newbornInfoLoading,
      newbornPredictionLoading,
      newbornPrediction,
      newbornInfo
    } = this.props;

    return (
      <React.Fragment>
        <FlexContainer>
          <FlexContainer direction="column" flex="2">
            <NewbornRecordHeader data-testid="newbornRecordHeader" />
            <NewBornRecord3dModel data-testid="newbornRecord3dModel" />
          </FlexContainer>
          <FlexContainer direction="column" flex="1">
            <NewbornRecordGraph
              newbornInfoLoading={newbornInfoLoading}
              data-testid="newbornRecordGraph"
              newbornInfo={returnNewbornChartData(
                newbornInfo,
                newbornPrediction
              )}
            />
            <NewBornRecordPrediction
              data-testid="newBornRecordPrediction"
              newbornPredictionLoading={newbornPredictionLoading}
              onPredictionClick={this.startPredictionTraining}
            />
          </FlexContainer>
        </FlexContainer>
      </React.Fragment>
    );
  }
}

NewBornRecord.propTypes = {
  fetchNewborn: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
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
  withMenuDrawer(
    withHeader(
      withRouter(
        connect(
          mapStateToProps,
          actions
        )(NewBornRecord)
      )
    ),
    1
  )
);
