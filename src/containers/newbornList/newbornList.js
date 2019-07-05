import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import {
  returnTooltipTitle,
  isTooltipOpen,
  returnNewbornCardInfo
} from "./newbornList_helpers";

import {
  Grid,
  GridContainer,
  FlexContainer
} from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../theme/snackbars/error.style";
import { NewbornCard } from "../../components/newbornCard";
import * as actions from "../../store/actions";
import withHeader from "../header/withHeader";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      isErrorOpen: false,
      generationIndex: 0,
      selectedNewborns: []
    };
  }

  componentDidMount() {
    const { fetchGenerations, generationList } = this.props;
    if (generationList)
      fetchGenerations().catch(error => {
        this.handleErrorMessage(error);
      });
  }

  componentDidUpdate(prevProps) {
    const { generationList, fetchGeneration } = this.props;
    const { generationIndex } = this.state;
    if (
      generationList !== prevProps.generationList &&
      generationList.length > 0
    ) {
      fetchGeneration(generationList[generationIndex].id, 100, 10).catch(
        error => {
          this.handleErrorMessage(error);
        }
      );
    }
  }

  renderNewbornGeneration = () => {
    const newbornCardList = this.returnNewbornCardList();
    const placeholderCardList = this.returnPlaceholderCardList();

    return (
      <Fragment>
        <Grid
          columnNumber={newbornCardList.length}
          data-testid="newborn-card-list"
          rowNumber={1}
        >
          {newbornCardList}
        </Grid>
        <Grid columnNumber={4} rowNumber={1}>
          {placeholderCardList}
        </Grid>
      </Fragment>
    );
  };

  handleNewbornSelect = event => {
    const newbornId = event.target.closest("section").dataset.newbornid;
    const { selectedNewborns, generationIndex } = this.state;
    const { generationList, filterGeneration, fetchGeneration } = this.props;
    if (selectedNewborns.includes(newbornId)) {
      fetchGeneration(generationList[generationIndex].id, 100, 10).catch(
        error => {
          this.handleErrorMessage(error);
        }
      );
      this.setState({
        selectedNewborns: selectedNewborns.filter(
          newborn => newborn !== newbornId
        )
      });
    } else if (selectedNewborns.length < 2) {
      if (selectedNewborns.length === 0) {
        filterGeneration(
          generationList[generationIndex].id,
          newbornId,
          100,
          10
        ).catch(error => {
          this.handleErrorMessage(error);
        });
      } else if (selectedNewborns.length === 1) {
        console.log("HERE2");
      }
      // if the selection is 1 then partner
      // if the selection is 2 then childs
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

  handleErrorMessage = error => {
    const isErrorOpen = true;
    this.setState({ isErrorOpen, errorMessage: error.message });
  };

  handleNewbornBuy = event => {
    const newbornInfo = JSON.parse(
      event.target.closest("button").dataset.newborninfo
    );
    const { updateNewbornOwnership, currentUserId } = this.props;
    event.stopPropagation();
    updateNewbornOwnership(
      newbornInfo.id,
      !newbornInfo.isOwnedByCurrentUser ? currentUserId : null,
      this.state.newbornSummaryStepLimit
    );
  };

  renderEmptyBornsIllustration = () => (
    <img
      data-testid="noBornIllustration"
      src="./images/no-borns.svg"
      alt="no borns"
    />
  );

  returnPlaceholderCardList = () => {
    const placeholderCardList = [];
    for (let i = 0; i < 4; i += 1) {
      placeholderCardList.push(
        <NewbornCard isPlaceholderCard newbornInfo={{}} tooltipOpen={false} />
      );
    }
    return placeholderCardList;
  };

  returnNewbornCardList = () => {
    const newbornCardList = [];
    const { generationNewborns, currentUserId } = this.props;
    const { hoveredNewborn, selectedNewborns } = this.state;
    generationNewborns.forEach((newborn, newbornKey) => {
      const tooltipTitle = returnTooltipTitle(selectedNewborns);
      const newbornInfo = returnNewbornCardInfo(
        newborn,
        selectedNewborns,
        hoveredNewborn,
        currentUserId
      );

      const tooltipOpen = isTooltipOpen(
        selectedNewborns,
        newbornInfo.isHovered
      );

      newbornCardList.push(
        <NewbornCard
          isPlaceholderCard={false}
          handleNewbornSelect={this.handleNewbornSelect}
          handleNewbornHover={this.handleNewbornHover}
          handleNewbornBuy={this.handleNewbornBuy}
          newbornInfo={newbornInfo}
          tooltipTitle={tooltipTitle}
          tooltipOpen={tooltipOpen}
          key={newbornKey}
        />
      );
    });

    return newbornCardList;
  };

  render() {
    const {
      generationLoading,
      generationListLoading,
      generationNewborns
    } = this.props;
    const { isErrorOpen, errorMessage } = this.state;
    const hasNewborns = generationNewborns && generationNewborns.length > 0;
    return (
      <Fragment>
        {generationListLoading || generationLoading ? (
          <FlexContainer>
            <CircularProgress
              variant="indeterminate"
              data-testid="newbornListLoading"
            />
          </FlexContainer>
        ) : (
          <Fragment>
            <GridContainer align="left" data-testid="newbornListContainer">
              {hasNewborns
                ? this.renderNewbornGeneration()
                : this.renderEmptyBornsIllustration()}
            </GridContainer>
          </Fragment>
        )}
        <ErrorDialog open={isErrorOpen} message={errorMessage} />
      </Fragment>
    );
  }
}

List.propTypes = {
  currentUserId: PropTypes.string,
  fetchGenerations: PropTypes.func.isRequired,
  fetchGeneration: PropTypes.func.isRequired,
  generationList: PropTypes.array.isRequired,
  generationListLoading: PropTypes.bool.isRequired,
  generationLoading: PropTypes.bool.isRequired,
  generationNewborns: PropTypes.array.isRequired,
  updateNewbornOwnership: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  currentUserId: state.userReducer.currentUserId,
  generationList: state.generationReducer.generationList,
  generationListLoading: state.generationReducer.generationListLoading,
  generation: state.generationReducer.generation,
  generationLoading: state.generationReducer.generationLoading,
  generationNewborns: state.generationReducer.generationNewborns,
  isAddNewbornToUserLoading: state.newBornReducer.isAddNewbornToUserLoading
});

export default withHeader(
  connect(
    mapStateToProps,
    actions
  )(withRouter(List)),
  0
);
