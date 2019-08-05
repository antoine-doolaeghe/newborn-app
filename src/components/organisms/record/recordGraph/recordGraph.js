import React, { useState, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { RecordGraphContainer } from "./recordGraph.style";
import * as queries from "../../../graphql/queries";
import GraphRangeSelect from "./graphRangeSelect";
import lineChartOptions from "./lineChartOptions";
import { ErrorDialog } from "../../molecules/snackbars/errorSnackBar/style/error.style";
import RecordGraphLoader from "./loader/recordGraphLoader";

import { returnNewbornChartData } from "../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../../utils/helpers/newbornGlobalHelpers";

const RecordGraph = props => {
  const [range, setRange] = useState(86400000);
  if (props.loading) {
    return (
      <RecordGraphContainer data-testid="newbornRecordGraphContainer">
        <RecordGraphLoader />
      </RecordGraphContainer>
    );
  }
  const {
    newbornModel: { id }
  } = props;

  const returnNoEpisode = () => (
    <div data-testid="newbornCardEmptyGraph">No training episode</div>
  );

  return (
    <RecordGraphContainer data-testid="newbornRecordGraphContainer">
      <Query query={gql(queries.getModel)} variables={{ id }}>
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }
          if (loading) {
            return <RecordGraphLoader />;
          }
          if (data.getModel.episodes.items.length > 0) {
            const episodes = returnSortedEpisodes(data.getModel);
            const steps = returnSortedSteps(episodes, 0);
            return (
              <Fragment>
                <GraphRangeSelect setRange={setRange} />
                <HighchartsReact
                  highcharts={Highcharts}
                  options={lineChartOptions(
                    returnNewbornChartData(steps),
                    "black",
                    range
                  )}
                />
              </Fragment>
            );
          }
          return returnNoEpisode();
        }}
      </Query>
    </RecordGraphContainer>
  );
};

export default RecordGraph;
