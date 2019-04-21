import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  returnInstructionTitle,
  isTooltipOpen,
  returnNewbornInfo
} from "./newbornList_helpers";

import { Grid, GridContainer, FlexContainer } from "../../theme/grid.style";
import { ErrorDialog } from "../../theme/error.style";
import NewBornCard from "../../components/newbornCard/newbornCard";
import * as actions from "../../store/actions";

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
      const isErrorOpen = true;
      this.setState({ isErrorOpen, errorMessage: error.message });
    });
  }

  componentDidUpdate(prevProps) {
    const { generationList, fetchParentGeneration } = this.props;
    if (
      generationList !== prevProps.generationList &&
      generationList.length > 0
    ) {
      fetchParentGeneration(
        generationList[this.state.parentGenerationIndex].id
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
    const {
      hoveredNewborn,
      newbornSummaryStepLimit,
      selectedNewborns
    } = this.state;
    parentGeneration.newborns.items.forEach((newborn, newbornKey) => {
      const instructionTitle = returnInstructionTitle(selectedNewborns);
      const newbornInfo = returnNewbornInfo(
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
          newbornInfo={newbornInfo}
          onBuyClick={() =>
            this.props.updateNewbornOwnership(
              newbornInfo.id,
              !newbornInfo.isOwnedByCurrentUser ? currentUserId : null,
              newbornSummaryStepLimit
            )
          }
          instructionTitle={instructionTitle}
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
      parentGeneration.newborns && parentGeneration.newborns.items
        ? parentGeneration.newborns.items.length > 0
        : false;
    console.log(this.props.isAddNewbornToUserLoading);
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

List.propTypes = {
  generationListLoading: PropTypes.bool.isRequired,
  fetchGenerations: PropTypes.func.isRequired,
  fetchParentGeneration: PropTypes.func.isRequired,
  generationList: PropTypes.array.isRequired,
  updateNewbornOwnership: PropTypes.func.isRequired,
  parentGenerationLoading: PropTypes.func.isRequired,
  parentGeneration: PropTypes.object.isRequired
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

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(List);
