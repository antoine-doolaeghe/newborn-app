import PropTypes from "prop-types";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornRecordGraphContainer } from "./newbornRecordGraph.style";
import lineChartOptions from "./lineChartOptions";

const NewbornRecordGraph = props => {
  const { newbornInfo } = props;
  const hasSummaryData =
    newbornInfo &&
    newbornInfo.summaries &&
    newbornInfo.summaries.datasets &&
    newbornInfo.summaries.datasets.length !== 0;
  return (
    <NewbornRecordGraphContainer data-testid="newbornRecordGraph">
      {props.newbornInfoLoading ? (
        <CircularProgress />
      ) : hasSummaryData ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={lineChartOptions(newbornInfo.summaries, newbornInfo.color)}
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
