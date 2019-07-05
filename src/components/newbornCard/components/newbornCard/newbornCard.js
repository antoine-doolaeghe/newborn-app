import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Tooltip from "@material-ui/core/Tooltip";
import NewBornCardHeader from "../newbornCardHeader/newbornCardHeader";
import {
  NewbornCardWrapper,
  NewbornCardBuyWrapper,
  NewbornCardChartWrapper
} from "./newbornCard.style";
import { BuyButton } from "../../../../theme/buttons/button.style";
import lineChartOptions from "../../lineChartOptions";

function NewbornCard(props) {
  const {
    handleNewbornHover,
    handleNewbornSelect,
    tooltipTitle,
    isPlaceholderCard,
    newbornInfo,
    handleNewbornBuy,
    tooltipOpen
  } = props;

  const hasSummaries =
    newbornInfo.summaries && newbornInfo.summaries.length !== 0;
  return (
    <Tooltip title={tooltipTitle} open={tooltipOpen}>
      <NewbornCardWrapper
        onClick={handleNewbornSelect}
        onMouseEnter={handleNewbornHover}
        isSelected={newbornInfo.isSelected}
        data-newbornid={newbornInfo.id}
        isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
        data-testid={
          !isPlaceholderCard ? "newbornCard" : "newbornCardPlaceholder"
        }
        isPlaceholderCard={isPlaceholderCard}
      >
        {!isPlaceholderCard && (
          <React.Fragment>
            <NewBornCardHeader
              title={newbornInfo.id.substring(
                newbornInfo.id.length - 3,
                newbornInfo.id.length
              )}
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
                    newbornInfo.color,
                    86400000
                  )}
                />
              </NewbornCardChartWrapper>
            ) : (
              <div data-testid="newbornCardEmptyGraph">No training record</div>
            )}
            {newbornInfo.isHovered && (
              <NewbornCardBuyWrapper>
                <BuyButton
                  color="primary"
                  onClick={handleNewbornBuy}
                  data-newborninfo={JSON.stringify(newbornInfo)}
                  data-testid="newbornOwnershipButton"
                />
              </NewbornCardBuyWrapper>
            )}
          </React.Fragment>
        )}
      </NewbornCardWrapper>
    </Tooltip>
  );
}

NewbornCard.propTypes = {
  history: PropTypes.object,
  handleNewbornHover: PropTypes.func,
  handleNewbornSelect: PropTypes.func,
  tooltipTitle: PropTypes.string.isRequired,
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  handleNewbornBuy: PropTypes.func,
  tooltipOpen: PropTypes.bool.isRequired
};

export default NewbornCard;
