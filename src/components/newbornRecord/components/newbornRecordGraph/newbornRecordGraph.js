import PropTypes from "prop-types";
import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  NewbornRecordGraphContainer,
  GraphRangeContainer,
  GraphRangeButton
} from "./newbornRecordGraph.style";
import lineChartOptions from "./lineChartOptions";

const graphTimeRange = {
  hour: 360000,
  twoHour: 360000 * 2,
  day: 86400000,
  twoDay: 86400000 * 2,
  week: 86400000 * 7
};

const NewbornRecordGraph = props => {
  const { newbornInfo } = props;
  const [range, setRange] = useState(86400000); // graph
  const hasSummaryData =
    newbornInfo &&
    newbornInfo.summaries &&
    newbornInfo.summaries.datasets &&
    newbornInfo.summaries.datasets.length !== 0;
  return (
    <NewbornRecordGraphContainer data-testid="newbornRecordGraphContainer">
      <GraphRangeContainer>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.hour);
          }}
        >
          1h
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.twoHour);
          }}
        >
          2h
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.day);
          }}
        >
          1d
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.twoDay);
          }}
        >
          2d
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.week);
          }}
        >
          1w
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(graphTimeRange.week);
          }}
        >
          All
        </GraphRangeButton>
      </GraphRangeContainer>
      {props.newbornInfoLoading ? (
        <CircularProgress />
      ) : hasSummaryData ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={lineChartOptions(
            newbornInfo.summaries,
            newbornInfo.color,
            range
          )}
        />
      ) : (
        <div data-testid="newbornCardEmptyGraph">No training record</div>
      )}
    </NewbornRecordGraphContainer>
  );
};

NewbornRecordGraph.propTypes = {
  newbornInfoLoading: PropTypes.bool.isRequired
};

export default NewbornRecordGraph;
