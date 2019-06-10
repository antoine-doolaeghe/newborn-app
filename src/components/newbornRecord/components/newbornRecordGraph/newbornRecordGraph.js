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
            setRange(360000);
          }}
        >
          1h
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(660000);
          }}
        >
          12h
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(86400000);
          }}
        >
          1d
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(86400000);
          }}
        >
          2d
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(86400000);
          }}
        >
          1w
        </GraphRangeButton>
        <GraphRangeButton
          data-testid="graphRangeButton"
          onClick={() => {
            setRange(86400000);
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
