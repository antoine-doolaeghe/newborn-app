import React, { Component, Fragment } from "react";
import { withAuthenticator } from "aws-amplify-react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import connect from "react-redux/es/connect/connect";
import * as actions from "../../store/actions";
import { returnNewbornInfo } from "../../utils/helpers/newbornGlobalHelpers";
import withHeader from "../header/withHeader";

import { Grid, GridContainer, FlexContainer } from "../../theme/grid.style";
import NewBornCard from "../../components/newbornCard/newbornCard";

class MyBorn extends Component {
  componentDidMount() {
    const { currentUser, fetchCurrentUserNewborns } = this.props;
    if (currentUser) {
      fetchCurrentUserNewborns(currentUser.attributes.sub);
    }
  }

  componentDidUpdate() {
    const {
      currentUser,
      currentUserNewbornList,
      currentUserNewbornListLoading,
      fetchCurrentUserNewborns
    } = this.props;
    if (
      currentUser &&
      currentUserNewbornList.length === 0 &&
      currentUserNewbornListLoading
    ) {
      fetchCurrentUserNewborns(currentUser.attributes.sub);
    }
  }

  handleNewbornBuy = event => {
    const {
      currentUser,
      fetchCurrentUserNewborns,
      updateNewbornOwnership
    } = this.props;
    const newbornId = event.target.closest("section").dataset.newbornid;
    updateNewbornOwnership(newbornId, null).then(
      fetchCurrentUserNewborns(currentUser.attributes.sub)
    );
  };

  handleNewbornHover = event => {
    const newbornId = event.target.closest("section").dataset.newbornid;
    this.setState({ hoveredNewborn: newbornId });
  };

  renderCells() {
    const newbornCardList = [];
    const { currentUserNewbornList, currentUserId } = this.props;
    const { hoveredNewborn } = this.state;
    currentUserNewbornList.forEach((newborn, newbornKey) => {
      const newbornInfo = returnNewbornInfo(
        newborn,
        [],
        hoveredNewborn,
        currentUserId
      );

      newbornCardList.push(
        <NewBornCard
          handleNewbornHover={this.handleNewbornHover}
          handleNewbornBuy={this.handleNewbornBuy}
          newbornInfo={newbornInfo}
          key={newbornKey}
          tooltipOpen={false}
        />
      );
    });

    return newbornCardList;
  }

  render() {
    const {
      currentUserNewbornListLoading,
      currentUserNewbornList
    } = this.props;
    const hasNewborns = currentUserNewbornList.length > 0;

    return (
      <React.Fragment>
        {currentUserNewbornListLoading ? (
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
                <Grid columnNumber={3} rowNumber={2}>
                  {this.renderCells()}
                </Grid>
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
  currentUser: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserNewbornList: PropTypes.array.isRequired,
  currentUserNewbornListLoading: PropTypes.bool.isRequired,
  updateNewbornOwnership: PropTypes.func.isRequired,
  fetchCurrentUserNewborns: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  currentUserId: state.userReducer.currentUserId,
  currentUserNewbornList: state.userReducer.currentUserNewbornList,
  currentUserNewbornListLoading: state.userReducer.currentUserNewbornListLoading
});

export default withAuthenticator(
  withHeader(
    connect(
      mapStateToProps,
      actions
    )(MyBorn)
  )
);
