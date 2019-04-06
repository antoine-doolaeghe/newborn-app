import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NewbornCard, NewbornCardBuyButton } from "./newbornCard.style";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const {
    newbornId,
    newbornName,
    newbornPlace,
    newbornSummaries,
    isNewbornOwnedByCurrentUser
  } = props;

  return (
    <NewbornCard
      onClick={() => {
        props.handleNewbornSelect(props.newbornId);
      }}
      onMouseEnter={() => {
        props.handleNewbornHover(props.newbornId);
      }}
      isSelected={props.isSelected}
      isNewbornOwnedByCurrentUser={isNewbornOwnedByCurrentUser}
      data-testid="newbornCard"
    >
      <BrowserRouter>
        <Link to={`./newborn-record/${props.newbornId}`}>
          <CardHeader
            avatar={<Avatar aria-label="Recipe" />}
            title={newbornName}
            subheader={newbornPlace}
            data-testid="newbornHeader"
          />
        </Link>
      </BrowserRouter>
      <Line
        options={lineChartOptions}
        data={newbornSummaries}
        data-newborn-id={newbornId}
        height={192}
      />
      {props.isHovered && (
        <NewbornCardBuyButton
          onClick={props.onBuyClick}
          data-testid="newbornOwnershipButton"
        />
      )}
    </NewbornCard>
  );
}

export default NewBornCard;
