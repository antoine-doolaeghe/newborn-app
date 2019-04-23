import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Tooltip from "@material-ui/core/Tooltip";
import NewBornCardHeader from "./newbornCardHeader/newbornCardHeader";
import {
  NewbornCard,
  NewbornCardBuyButton,
  NewbornCardChartWrapper
} from "./newbornCard.style";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const {
    handleNewbornHover,
    handleNewbornSelect,
    tooltipTitle,
    isPlaceholderCard,
    newbornInfo,
    handleNewbornBuy,
    tooltipOpen
  } = props;
  console.log(props.history);
  const hasSummaries =
    newbornInfo.summaries && newbornInfo.summaries.length !== 0;
  return (
    <Tooltip title={tooltipTitle} open={tooltipOpen}>
      <NewbornCard
        onClick={handleNewbornSelect}
        onMouseEnter={handleNewbornHover}
        isSelected={newbornInfo.isSelected}
        data-newbornid={newbornInfo.id}
        isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
        data-testid="newbornCard"
        isPlaceholderCard={isPlaceholderCard}
      >
        {!isPlaceholderCard && (
          <React.Fragment>
            <NewBornCardHeader
              title={newbornInfo.name}
              subTitle="1y/2m/12d"
              newbornId={newbornInfo.id}
              data-testid="newbornHeader"
            />
            {hasSummaries ? (
              <NewbornCardChartWrapper data-testid="newbornCardGraph">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={lineChartOptions(
                    newbornInfo.summaries,
                    newbornInfo.color
                  )}
                />
              </NewbornCardChartWrapper>
            ) : (
              <div data-testid="newbornCardEmptyGraph">No training record</div>
            )}
            {newbornInfo.isHovered && (
              <NewbornCardBuyButton
                onClick={handleNewbornBuy}
                data-newborninfo={JSON.stringify(newbornInfo)}
                data-testid="newbornOwnershipButton"
              />
            )}
          </React.Fragment>
        )}
      </NewbornCard>
    </Tooltip>
  );
}

NewBornCard.propTypes = {
  history: PropTypes.object,
  handleNewbornHover: PropTypes.func,
  handleNewbornSelect: PropTypes.func,
  tooltipTitle: PropTypes.string.isRequired,
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  handleNewbornBuy: PropTypes.func,
  tooltipOpen: PropTypes.bool.isRequired
};

export default NewBornCard;
