import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import { withAuthenticator } from "aws-amplify-react";
import { returnTooltipTitle, isTooltipOpen } from "./newbornList_helpers";
import { returnNewbornCardInfo } from "../../utils/helpers/newbornGlobalHelpers";

import {
  Grid,
  GridContainer,
  FlexContainer
} from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../theme/snackbars/error.style";
import NewBornCard from "../../components/newbornCard/newbornCard";
import * as actions from "../../store/actions";
import withHeader from "../header/withHeader";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      isErrorOpen: false,
      parentGenerationIndex: 0,
      selectedNewborns: []
    };
  }

  componentDidMount() {
    const { fetchGenerations } = this.props;
    fetchGenerations().catch(error => {
      this.handleErrorMessage(error);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { generationList, fetchParentGeneration } = this.props;
    const { parentGenerationIndex, selectedNewborns } = this.state;
    if (
      generationList !== prevProps.generationList &&
      generationList.length > 0
    ) {
      fetchParentGeneration(generationList[parentGenerationIndex].id).catch(
        error => {
          this.handleErrorMessage(error);
        }
      );
    }

    if (
      selectedNewborns !== prevState.selectedNewborns &&
      selectedNewborns.length > 2
    ) {
      fetchParentGeneration(generationList[parentGenerationIndex].id).catch(
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
      <React.Fragment>
        <Grid columnNumber={newbornCardList.length} rowNumber={1}>
          {newbornCardList}
        </Grid>
        <Grid columnNumber={4} rowNumber={1}>
          {placeholderCardList}
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
    <img src="./images/no-borns.svg" alt="no borns" />
  );

  returnPlaceholderCardList = () => {
    const placeholderCardList = [];
    for (let i = 0; i < 4; i += 1) {
      placeholderCardList.push(
        <NewBornCard isPlaceholderCard newbornInfo={{}} tooltipOpen={false} />
      );
    }
    return placeholderCardList;
  };

  returnNewbornCardList = () => {
    const newbornCardList = [];
    const { parentGeneration, currentUserId } = this.props;
    const { hoveredNewborn, selectedNewborns } = this.state;
    parentGeneration.newborns.items.forEach((newborn, newbornKey) => {
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
        <NewBornCard
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
      parentGenerationLoading,
      generationListLoading,
      parentGeneration
    } = this.props;
    const { isErrorOpen, errorMessage } = this.state;
    const hasNewborns =
      parentGeneration.newborns &&
      parentGeneration.newborns.items &&
      parentGeneration.newborns.items.length > 0;
    return (
      <Fragment>
        {generationListLoading || parentGenerationLoading ? (
          <FlexContainer>
            <CircularProgress
              variant="indeterminate"
              data-testid="newbornListLoading"
            />
          </FlexContainer>
        ) : (
          <Fragment>
            <GridContainer align="left">
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
  currentUserId: PropTypes.string.isRequired,
  fetchGenerations: PropTypes.func.isRequired,
  fetchParentGeneration: PropTypes.func.isRequired,
  generationList: PropTypes.array.isRequired,
  generationListLoading: PropTypes.bool.isRequired,
  parentGeneration: PropTypes.object.isRequired,
  parentGenerationLoading: PropTypes.func.isRequired,
  updateNewbornOwnership: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  currentUserId: state.userReducer.currentUserId,
  generationList: state.generationReducer.generationList,
  generationListLoading: state.generationReducer.generationListLoading,
  parentGeneration: state.generationReducer.parentGeneration,
  parentGenerationLoading: state.generationReducer.parentGenerationLoading,
  isAddNewbornToUserLoading: state.newBornReducer.isAddNewbornToUserLoading
});

export default withHeader(
  connect(
    mapStateToProps,
    actions
  )(withRouter(List)),
  0
);
