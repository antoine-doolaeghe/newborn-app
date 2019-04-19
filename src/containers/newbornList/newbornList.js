import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import withWidth from "@material-ui/core/withWidth";
import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

import { Grid, GridContainer, FlexContainer } from "../../theme/grid.style";
import { ErrorDialog } from "../../theme/error.style";
import NewBornCard from "../../components/newbornCard/newbornCard";
import newBornListJss from "./newbornList_jss";
import * as actions from "../../store/actions";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNewborns: [],
      isErrorOpen: false,
      errorMessage: "",
      parentGenerationIndex: 0
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
    // if selected newborn length is 2
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

    return (
      <React.Fragment>
        <Grid columnNumber={newbornCardList.length} rowNumber={1}>
          {newbornCardList}
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

  returnNewbornInfo = (
    newborn,
    selectedNewborns,
    hoveredNewborn,
    currentUserId
  ) => {
    const newbornInfo = {
      name: newborn.name || "",
      id: newborn.id || "",
      bornPlace: newborn.bornPlace || "unknown region",
      isSelected: selectedNewborns.includes(newborn.id),
      isHovered: hoveredNewborn === newborn.id,
      isOwnedByCurrentUser:
        newborn.owner && newborn.owner.id && newborn.owner.id === currentUserId,
      summaries: returnNewbornChartData(newborn)
    };
    return newbornInfo;
  };

  returnNewbornCardList() {
    const newbornCardList = [];
    const { parentGeneration, currentUserId } = this.props;
    const {
      selectedNewborns,
      hoveredNewborn,
      newbornSummaryStepLimit
    } = this.state;
    parentGeneration.newborns.items.forEach((newborn, newbornKey) => {
      const newbornInfo = this.returnNewbornInfo(
        newborn,
        selectedNewborns,
        hoveredNewborn,
        currentUserId
      );

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
  withStyles(newBornListJss, {
    name: "List"
  }),
  withWidth(),
  connect(
    mapStateToProps,
    actions
  )
)(List);
