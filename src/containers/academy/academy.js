/* eslint-disable react/forbid-prop-types */
import * as actions from "../../store/actions";

import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";

import AcademyJss from "./academy_jss";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { withStyles } from "@material-ui/core/styles";

class Academy extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}

Academy.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cellList: state.newBornReducer.cellList,
  cellLoading: state.newBornReducer.cellListLoading
});

export default withAuthenticator(
  withMenuDrawer(
    withHeader(
      connect(
        mapStateToProps,
        actions
      )(withStyles(AcademyJss)(Academy))
    ),
    3
  )
);
