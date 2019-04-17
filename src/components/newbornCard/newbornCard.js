import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { NewbornCard, NewbornCardBuyButton } from "./newbornCard.style";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const {
    newbornInfo,
    handleNewbornHover,
    handleNewbornSelect,
    onBuyClick
  } = props;

  return (
    <NewbornCard
      onClick={handleNewbornSelect}
      onMouseEnter={handleNewbornHover}
      isSelected={newbornInfo.isSelected}
      data-newbornid={newbornInfo.id}
      isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
      data-testid="newbornCard"
    >
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
    </NewbornCard>
  );
}

export default NewBornCard;