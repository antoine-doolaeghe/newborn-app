import * as actions from "../../store/actions";

import React, { Component, Fragment } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";

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
  componentDidUpdate() {
    if (
      this.props.currentUser &&
      this.props.currentUserNewbornList.length === 0
    ) {
      console.log(this.props.currentUser);
      this.props
        .fetchCurrentUserNewborns(this.props.currentUser.attributes.sub)
        .catch(error => {
          console.log(error.name); // TO-DO error handling
        });
    }
  }

  renderNewbornGeneration = () => {
    return (
      <React.Fragment>
        <Grid columnNumber={this.renderCells().length}>
          {this.renderCells()}
        </Grid>
      </React.Fragment>
    );
  };

  handleNewbornSelect = newbornKey => {
    const { selectedNewborns } = this.state;
    if (selectedNewborns.includes(newbornKey)) {
      this.setState({
        selectedNewborns: selectedNewborns.filter(
          newborn => newborn !== newbornKey
        )
      });
    } else if (selectedNewborns.length < 2) {
      this.setState({
        selectedNewborns: [...selectedNewborns, newbornKey]
      });
    }
  };

  handleNewbornHover = newbornKey => {
    this.setState({ hoveredNewborn: newbornKey });
  };

  renderCells() {
    const newbornCardList = [];
    const { currentUserNewbornList } = this.props;
    const { selectedNewborns, hoveredNewborn } = this.state;
    const currentUserId =
      this.props.currentUser && this.props.currentUser.attributes
        ? this.props.currentUser.attributes.sub
        : null;
    currentUserNewbornList.forEach((newborn, newbornKey) => {
      const newbornName = newborn.name || "";
      const newbornId = newborn.id || "";
      const newbornPlace = newborn.bornPlace || "unknown region";
      const isSelected = selectedNewborns.includes(newbornId);
      const isHovered = hoveredNewborn === newbornId;
      const isNewbornOwnedByCurrentUser =
        newborn.owner && newborn.owner.id && newborn.owner.id === currentUserId;
      const newbornSummaries = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            backgroundColor: "black",
            data: [
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random()
            ]
          }
        ]
      };

      newbornCardList.push(
        <NewBornCard
          handleNewbornSelect={newbornId => {
            this.handleNewbornSelect(newbornId);
          }}
          handleNewbornHover={newbornId => {
            this.handleNewbornHover(newbornId);
          }}
          isSelected={isSelected}
          isHovered={isHovered}
          isNewbornOwnedByCurrentUser={isNewbornOwnedByCurrentUser}
          newbornId={newbornId}
          newbornSummaries={newbornSummaries}
          newbornName={newbornName}
          newbornPlace={newbornPlace}
          onBuyClick={() =>
            this.props.updateNewbornOwnership(
              newbornId,
              !isNewbornOwnedByCurrentUser ? currentUserId : null
            )
          }
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
