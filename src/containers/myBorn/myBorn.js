import * as actions from "../../store/actions";

import React, { Component, Fragment } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";
import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

import MyBornJss from "./myBorn_jss";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, GridContainer, FlexContainer } from "../../theme/grid.style";
import connect from "react-redux/es/connect/connect";
import { withStyles } from "@material-ui/core/styles";
import NewBornCard from "../../components/newbornCard/newbornCard";

class MyBorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNewborns: []
    };
  }

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

  handleOnBuyClick = event => {
    const { currentUser, fetchCurrentUserNewborns } = this.props;
    const newbornId = event.target.closest("section").dataset.newbornid;
    this.props
      .updateNewbornOwnership(newbornId, null)
      .then(fetchCurrentUserNewborns(currentUser.attributes.sub));
  };

  handleNewbornHover = event => {
    const newbornId = event.target.closest("section").dataset.newbornid;
    this.setState({ hoveredNewborn: newbornId });
  };

  renderCells() {
    const newbornCardList = [];
    const { currentUserNewbornList } = this.props;
    const { hoveredNewborn } = this.state;
    currentUserNewbornList.forEach((newborn, newbornKey) => {
      const newbornInfo = {
        name: newborn.name || "",
        id: newborn.id || "",
        bornPlace: newborn.bornPlace || "unknown region",
        isHovered: hoveredNewborn === newborn.id,
        isOwnedByCurrentUser: true,
        summaries: returnNewbornChartData(newborn)
      };

      newbornCardList.push(
        <NewBornCard
          handleNewbornHover={this.handleNewbornHover}
          onBuyClick={this.handleOnBuyClick}
          newbornInfo={newbornInfo}
          key={newbornKey}
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
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  currentUserNewbornList: state.userReducer.currentUserNewbornList,
  currentUserNewbornListLoading: state.userReducer.currentUserNewbornListLoading
});

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
