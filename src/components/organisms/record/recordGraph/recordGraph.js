import React, { useState, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";
import { RecordGraphContainer } from "./recordGraph.style";
import * as queries from "../../../../graphql/queries";
import GraphRangeSelect from "./graphRangeSelect";
import lineChartOptions from "./lineChartOptions";
import { ErrorDialog } from "../../../molecules/snackbars/errorSnackBar/style/error.style";
import RecordGraphLoader from "./loader/recordGraphLoader";

import { returnNewbornChartData } from "../../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../../../utils/helpers/newbornGlobalHelpers";

const RecordGraph = ({ loading, modelId }) => {
  const [range, setRange] = useState(86400000);

  const returnNoEpisode = () => (
    <div data-testid="newbornCardEmptyGraph">No training episode</div>
  );

  if (loading) {
    return (
      <RecordGraphContainer data-testid="newbornRecordGraphContainer">
        <RecordGraphLoader />
      </RecordGraphContainer>
    );
  }
  return (
    <RecordGraphContainer data-testid="newbornRecordGraphContainer">
      <Query query={gql(queries.getAllEpisodes)} variables={{ id: modelId }}>
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

RecordGraph.propTypes = {
  loading: PropTypes.bool.isRequired,
  modelId: PropTypes.object.isRequired
};

export default RecordGraph;
