import PropTypes from "prop-types";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewBornRecordGraphContainer } from "./newbornRecordGraph.style";
import lineChartOptions from "./lineChartOptions";

const NewbornRecordGraph = props => {
  const { newbornInfo } = props;

  return (
    <NewBornRecordGraphContainer data-testid="newbornRecordGraph">
      {props.newbornInfoLoading && <CircularProgress />
      // <Line
      //   options={lineChartOptions(newbornInfo.min)}
      //   data={newbornInfo}
      //   height={192}
      // />
      }
    </NewBornRecordGraphContainer>
  );
};

NewbornRecordGraph.propTypes = {
  newbornGenerations: PropTypes.array.isRequired
};

export default NewbornRecordGraph;
