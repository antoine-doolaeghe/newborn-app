import * as actions from "../../store/actions";

import React, { Component, Fragment } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";

import MyBornJss from "./myBorn_jss";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { withStyles } from "@material-ui/core/styles";

class MyBorn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {newbornListLoading ? (
          <FlexContainer>
            <CircularProgress
              variant="indeterminate"
              data-testid="newbornListLoading"
            />
          </FlexContainer>
        ) : (
          <Fragment>
            <GridContainer>
              {hasNewborns ? (
                this.renderNewbornGeneration()
              ) : (
                <img src="./images/no-borns.svg" alt="no borns" />
              )}
            </GridContainer>
          </Fragment>
        )}
      </React.Fragment>
    );
  }
}

MyBorn.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = () => {};

export default withAuthenticator(
  withMenuDrawer(
    withHeader(
      connect(
        mapStateToProps,
        actions
      )(withStyles(MyBornJss)(MyBorn))
    ),
    2
  )
);
