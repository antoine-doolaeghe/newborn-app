import React from "react";
import { GraphRangeContainer, GraphRangeButton } from "../recordGraph.style";

const graphTimeRange = {
  hour: { label: "1h", timeRange: 360000 },
  twoHour: { label: "2h", timeRange: 360000 * 2 },
  day: { label: "1d", timeRange: 86400000 },
  twoDay: { label: "2d", timeRange: 86400000 * 2 },
  week: { label: "week", timeRange: 86400000 * 7 }
};

export const GraphRangeSelect = props => {
  const { setRange } = props;

  return (
    <GraphRangeContainer>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.hour.timeRange);
        }}
      >
        {graphTimeRange.hour.label}
      </GraphRangeButton>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.twoHour.timeRange);
        }}
      >
        {graphTimeRange.twoHour.label}
      </GraphRangeButton>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.day.timeRange);
        }}
      >
        {graphTimeRange.day.label}
      </GraphRangeButton>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.twoDay.timeRange);
        }}
      >
        {graphTimeRange.twoDay.label}
      </GraphRangeButton>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.week.timeRange);
        }}
      >
        {graphTimeRange.week.label}
      </GraphRangeButton>
      <GraphRangeButton
        data-testid="graphRangeButton"
        onClick={() => {
          setRange(graphTimeRange.week.timeRange);
        }}
      >
        {graphTimeRange.week.label}
      </GraphRangeButton>
    </GraphRangeContainer>
  );
};
