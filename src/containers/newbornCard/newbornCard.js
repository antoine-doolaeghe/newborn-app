import React from "react";
import { withRouter, BrowserRouter } from "react-router-dom";
import { NewbornCard } from "./newbornCard.style";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import lineChartOptions from "./lineChartOptions";

function NewBornCard(props) {
  const { newbornId, newbornName, newbornPlace, newbornSummaries } = props;
  return (
    <NewbornCard
      onClick={() => {
        props.handleNewbornSelect(props.newbornId);
      }}
      isSelected={props.isSelected}
    >
      <BrowserRouter>
        <Link to={`./newborn-record/${props.newbornId}`}>
          <CardHeader
            avatar={<Avatar aria-label="Recipe" />}
            title={newbornName}
            subheader={newbornPlace}
          />
        </Link>
      </BrowserRouter>
      <Line
        options={lineChartOptions}
        data={newbornSummaries}
        data-newborn-id={newbornId}
        height={192}
      />
    </NewbornCard>
  );
}

export default NewBornCard;
