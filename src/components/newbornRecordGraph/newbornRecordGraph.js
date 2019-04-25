import PropTypes from "prop-types";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewBornRecordGraphContainer } from "./newbornRecordGraph.style";
import lineChartOptions from "./lineChartOptions";

const NewbornRecordGraph = props => {
  const { newbornInfo } = props;
  console.log(newbornInfo);
  const hasSummaries =
    newbornInfo &&
    newbornInfo.summaries &&
    newbornInfo.summaries.datasets &&
    newbornInfo.summaries.datasets.length !== 0;
  return (
    <NewBornRecordGraphContainer data-testid="newbornRecordGraph">
      {props.newbornInfoLoading ? (
        <CircularProgress />
      ) : hasSummaries ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={lineChartOptions(newbornInfo.summaries, newbornInfo.color)}
        />
      ) : (
        <div data-testid="newbornCardEmptyGraph">No training record</div>
      )}
    </NewBornRecordGraphContainer>
  );
};

NewbornRecordGraph.propTypes = {
  newbornGenerations: PropTypes.array.isRequired
};

export default NewbornRecordGraph;
