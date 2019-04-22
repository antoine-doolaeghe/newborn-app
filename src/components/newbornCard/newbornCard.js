import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import NewBornCardHeader from "./newbornCardHeader/newbornCardHeader";
import { NewbornCard, NewbornCardBuyButton } from "./newbornCard.style";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const {
    handleNewbornHover,
    handleNewbornSelect,
    instructionTitle,
    isPlaceholderCard,
    newbornInfo,
    onBuyClick,
    tooltipOpen
  } = props;

  return (
    <Tooltip title={instructionTitle} open={tooltipOpen}>
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
              data-testid="newbornHeader"
            />

            <HighchartsReact
              highcharts={Highcharts}
              options={lineChartOptions(
                newbornInfo.summaries,
                newbornInfo.isOwnedByCurrentUser
                  ? "red"
                  : newbornInfo.isSelected
                  ? "green"
                  : "grey"
              )}
            />
            {newbornInfo.isHovered && (
              <NewbornCardBuyButton
                onClick={onBuyClick}
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
  handleNewbornHover: PropTypes.bool.isRequired,
  handleNewbornSelect: PropTypes.func.isRequired,
  instructionTitle: PropTypes.string.isRequired,
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  onBuyClick: PropTypes.func.isRequired,
  tooltipOpen: PropTypes.bool.isRequired
};

export default NewBornCard;
