import * as actions from '../../store/actions';

import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { withAuthenticator } from 'aws-amplify-react';
import withMenuDrawer from '../../containers/menuDrawer/withMenuDrawer';
import withHeader from '../header/withHeader';
import { withRouter } from 'react-router-dom';

import { FlexContainer } from '../../theme/grid.style';
import NewBornRecordGraph from '../../containers/newbornRecordGraph/newbornRecordGraph';
import NewBornRecordHeader from '../../containers/newbornRecordHeader/newbornRecordHeader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

  renderNewBornRecordGraph = () =>
    !this.returnNewbornGenerations() ? <img src="../images/empty-chart.svg" alt="empty-chart" /> : <NewBornRecordGraph newbornGenerations={this.returnNewbornGenerations()} />;

  render() {
    const { newbornInfoLoading } = this.props;
    return (
      <FlexContainer>
        <NewBornRecordHeader />
        {newbornInfoLoading ? <CircularProgress /> : this.renderNewBornRecordGraph()}
      </FlexContainer>
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
