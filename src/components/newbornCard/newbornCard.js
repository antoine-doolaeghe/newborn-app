import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { NewbornCard, NewbornCardBuyButton } from "./newbornCard.style";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const {
    handleNewbornHover,
    handleNewbornSelect,
    intructionTitle,
    isPlaceholderCard,
    newbornInfo,
    onBuyClick
  } = props;

  return (
    <Tooltip title={intructionTitle}>
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
            <CardHeader
              avatar={<Avatar aria-label="Recipe" />}
              title={newbornInfo.name}
              subheader={newbornInfo.bornPlace}
              data-testid="newbornHeader"
            />

            <Line
              options={lineChartOptions(newbornInfo.min)}
              data={newbornInfo.summaries}
              height={192}
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
  intructionTitle: PropTypes.string.isRequired,
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  onBuyClick: PropTypes.func.isRequired
};

export default NewBornCard;
