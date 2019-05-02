/* eslint-disable react/forbid-prop-types */

import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";

import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { withStyles } from "@material-ui/core/styles";
import LiveJss from "./live_jss";
import withHeader from "../header/withHeader";
import * as actions from "../../store/actions";

class Live extends Component {
  componentDidMount() {
    const { fetchNewborns } = this.props;
    fetchNewborns().catch(error => {
      console.log(error.name); // TO-DO error handling
    });
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>Live Page</div>;
  }
}

Live.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchNewborns: PropTypes.func.isRequired
};

const mapStateToProps = () => {};

export default withAuthenticator(
  withHeader(
    connect(
      mapStateToProps,
      actions
    )(withStyles(LiveJss)(Live))
  )
);
