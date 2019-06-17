import PropTypes from "prop-types";
import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornRecordGraphContainer } from "./newbornRecordGraph.style";
import GraphRangeSelect from "./graphRangeSelect";
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
    <NewbornRecordGraphContainer data-testid="newbornRecordGraphContainer">
      <GraphRangeSelect setRange={setRange} />
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
