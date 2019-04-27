import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
  const [range, setRange] = useState(86400000);
  const hasSummaryData =
    newbornInfo &&
    newbornInfo.summaries &&
    newbornInfo.summaries.datasets &&
    newbornInfo.summaries.datasets.length !== 0;
  return (
    <NewbornRecordGraphContainer data-testid="newbornRecordGraph">
      <GraphRangeContainer>
        <GraphRangeButton
          onClick={() => {
            setRange(360000);
          }}
        >
          1h
        </GraphRangeButton>
        <GraphRangeButton
          onClick={() => {
            setRange(660000);
          }}
        >
          12h
        </GraphRangeButton>
        <GraphRangeButton
          onClick={() => {
            setRange(86400000);
          }}
        >
          1d
        </GraphRangeButton>
        <GraphRangeButton
          onClick={() => {
            setRange(86400000);
          }}
        >
          2d
        </GraphRangeButton>
        <GraphRangeButton
          onClick={() => {
            setRange(86400000);
          }}
        >
          1w
        </GraphRangeButton>
        <GraphRangeButton
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
  newbornInfo: PropTypes.object.isRequired,
  newbornInfoLoading: PropTypes.bool.isRequired
};

export default NewbornRecordGraph;
