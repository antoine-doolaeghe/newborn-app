import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import withWidth from "@material-ui/core/withWidth";
import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

import { Grid, GridContainer, FlexContainer } from "../../theme/grid.style";
import NewBornCard from "../../components/newbornCard/newbornCard";
import newBornListJss from "./newbornList_jss";
import * as actions from "../../store/actions";
import runPrediction from "../../tensorflow/tensorflow";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNewborns: [],
      newbornSummaryStepLimit: 100
    };
  }

  componentDidMount() {
    const { newbornSummaryStepLimit } = this.state;
    this.props.fetchNewborns(newbornSummaryStepLimit);
  }

  renderNewbornGeneration = () => {
    return (
      <React.Fragment>
        <Grid columnNumber={this.renderCells().length} rowNumber={1}>
          {this.renderCells()}
        </Grid>
      </React.Fragment>
    );
  };

  handleNewbornSelect = event => {
    const newbornId = event.target.closest("section").dataset.newbornid;
    const { selectedNewborns } = this.state;
    if (selectedNewborns.includes(newbornId)) {
      this.setState({
        selectedNewborns: selectedNewborns.filter(
          newborn => newborn !== newbornId
        )
      });
    } else if (selectedNewborns.length < 2) {
      this.setState({
        selectedNewborns: [...selectedNewborns, newbornId]
      });
    }
  };

  handleNewbornHover = event => {
    const newbornId = event.target.closest("section").dataset.newbornid;
    this.setState({
      hoveredNewborn: newbornId
    });
  };

  renderCells() {
    const newbornCardList = [];
    const { newbornList, currentUserId } = this.props;
    const {
      selectedNewborns,
      hoveredNewborn,
      newbornSummaryStepLimit
    } = this.state;
    newbornList.forEach((newborn, newbornKey) => {
      const newbornInfo = {
        name: newborn.name || "",
        id: newborn.id || "",
        bornPlace: newborn.bornPlace || "unknown region",
        isSelected: selectedNewborns.includes(newborn.id),
        isHovered: hoveredNewborn === newborn.id,
        isOwnedByCurrentUser:
          newborn.owner &&
          newborn.owner.id &&
          newborn.owner.id === currentUserId,
        summaries: returnNewbornChartData(newborn)
      };

      newbornCardList.push(
        <NewBornCard
          handleNewbornSelect={this.handleNewbornSelect}
          handleNewbornHover={this.handleNewbornHover}
          newbornInfo={newbornInfo}
          onBuyClick={() =>
            this.props.updateNewbornOwnership(
              newbornInfo.id,
              !newbornInfo.isOwnedByCurrentUser ? currentUserId : null,
              newbornSummaryStepLimit
            )
          }
          key={newbornKey}
        />
      );
    });

    return newbornCardList;
  }

  render() {
    const { newbornListLoading, newbornList } = this.props;
    const hasNewborns = newbornList.length > 0;
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
            <GridContainer align="left">
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

List.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  currentUserId: state.userReducer.currentUserId,
  newbornList: state.newBornReducer.newbornList,
  newbornListLoading: state.newBornReducer.newbornListLoading,
  isAddNewbornToUserLoading: state.newBornReducer.isAddNewbornToUserLoading
});

export default compose(
  withStyles(newBornListJss, {
    name: "List"
  }),
  withWidth(),
  connect(
    mapStateToProps,
    actions
  )
)(List);
