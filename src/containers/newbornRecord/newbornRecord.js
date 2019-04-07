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
import runPredction from "../../tensorflow/tensorflow";

class NewBornRecord extends Component {
  componentWillMount() {
    const { newbornInfo, fetchNewborn, match } = this.props;
    if (!newbornInfo || newbornInfo.id !== match.params.id) {
      fetchNewborn(match.params.id);
    }
  }

  returnNewbornInfos = () =>
    this.props.newbornInfo ? this.props.newbornInfo : {};

  returnNewbornGenerations = () => {
    const { items } = this.returnNewbornInfos().generations || { items: [] };
    return items;
  };

  render() {
    const { newbornInfoLoading, newbornInfo } = this.props;
    return (
      <React.Fragment>
        <FlexContainer>
          <FlexContainer direction="column" flex="2">
            <NewbornRecordHeader />
            <NewBornRecord3dModel />
          </FlexContainer>
          <FlexContainer direction="column" flex="1">
            <NewbornRecordGraph
              newbornInfoLoading={newbornInfoLoading}
              newbornGenerations={this.returnNewbornGenerations()}
            />
            <NewBornRecordPrediction
              newbornInfoLoading={newbornInfoLoading}
              onPredictionClick={() => {
                runPredction(returnNewbornPredictionData(newbornInfo));
              }}
            />
          </FlexContainer>
        </FlexContainer>
      </React.Fragment>
    );
  }
}

NewBornRecord.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  newbornInfoLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  newbornInfo: state.newBornReducer.newbornInfo,
  newbornInfoLoading: state.newBornReducer.newbornInfoLoading
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
