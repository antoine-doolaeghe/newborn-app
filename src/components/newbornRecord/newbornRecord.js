import * as actions from '../../store/actions';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withAuthenticator } from 'aws-amplify-react';
import { withRouter } from 'react-router-dom';

import { FlexContainer } from '../../theme/grid.style';
import withMenuDrawer from '../../containers/menuDrawer/withMenuDrawer';
import withHeader from '../header/withHeader';
import NewbornRecordGraph from '../../containers/newbornRecordGraph/newbornRecordGraph';
import NewbornRecordHeader from '../../containers/newbornRecordHeader/newbornRecordHeader';
import NewBornRecord3dModel from '../../containers/newbornRecord3dModel/newbornRecord3dModel';
import NewBornRecordPrediction from '../../containers/newbornPrediction/newbornPrediction';

class NewBornRecord extends Component {
  componentWillMount() {
    const { newbornInfo, fetchNewborn, match } = this.props;
    if (!newbornInfo || newbornInfo.id !== match.params.id) {
      fetchNewborn(match.params.id);
    }
  }

  returnNewbornInfos = () => (this.props.newbornInfo ? this.props.newbornInfo : {});

  returnNewbornGenerations = () => {
    const { items } = this.returnNewbornInfos().generations || { items: [] };
    return items;
  };

  render() {
    const { newbornInfoLoading } = this.props;
    return (
      <React.Fragment>
        <FlexContainer>
          <NewbornRecordHeader />
          <NewbornRecordGraph newbornInfoLoading={newbornInfoLoading} newbornGenerations={this.returnNewbornGenerations()}/>
        </FlexContainer>
        <FlexContainer>
          <NewBornRecord3dModel />
          <NewBornRecordPrediction />
        </FlexContainer>
      </React.Fragment>
    );
  }
}

NewBornRecord.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  newbornInfoLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  newbornInfo: state.newBornReducer.newbornInfo,
  newbornInfoLoading: state.newBornReducer.newbornInfoLoading,
});

export default withAuthenticator(
  withMenuDrawer(
    withHeader(
      withRouter(
        connect(
          mapStateToProps,
          actions,
        )(NewBornRecord),
      ),
    ),
    1,
  ),
);
