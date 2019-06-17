import React from "react";
import {
  GraphRangeContainer,
  GraphRangeButton
} from "../newbornRecordGraph.style";

const graphTimeRange = {
  hour: 360000,
  twoHour: 360000 * 2,
  day: 86400000,
  twoDay: 86400000 * 2,
  week: 86400000 * 7
};

export const GraphRangeSelect = props => {
  const { setRange } = props;
  return (
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
  );
};
