import * as actions from '../../store/actions';

import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import withMenuDrawer from '../../containers/menuDrawer/withMenuDrawer';
import withHeader from '../header/withHeader';

import MyBornJss from './myBorn_jss';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { withStyles } from '@material-ui/core/styles';

class MyBorn extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>MyBornPage</div>;
  }
}

MyBorn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => {};

export default withAuthenticator(
  withMenuDrawer(
    withHeader(
      connect(
        mapStateToProps,
        actions,
      )(withStyles(MyBornJss)(MyBorn)),
    ),
    2,
  ),
);
