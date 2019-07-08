import React, { useState, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RcordGraphContainer } from "./recordGraph.style";
import * as queries from "../../../graphql/queries";
import GraphRangeSelect from "./graphRangeSelect";
import lineChartOptions from "./lineChartOptions";
import { ErrorDialog } from "../../snackbars/errorSnackBar/style/error.style";

import { returnNewbornChartData } from "../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../../utils/helpers/newbornGlobalHelpers";

// export const subscribeNewborn = newbornId => async dispatch => {
//   API.graphql(graphqlOperation(subscriptions.onUpdateNewborn)).subscribe({
//     next: newborn => {
//       if (newborn.value.data.onUpdateNewborn.id === newbornId) {
//         dispatch({
//           type: SUBSCRIBE_NEWBORN_SUCCESS,
//           payload: newborn.value.data.onUpdateNewborn.models.items[0].episodes
//         });
//       }
//     }
//   });
// };

const RecordGraph = props => {
  const {
    newbornModel: { id }
  } = props;
  const [range, setRange] = useState(86400000);
  const returnNoEpisode = () => (
    <div data-testid="newbornCardEmptyGraph">No training episode</div>
  );

  return (
    <RcordGraphContainer data-testid="newbornRecordGraphContainer">
      <Query query={gql(queries.getModel)} variables={{ id }}>
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }
          if (loading) {
            return <CircularProgress />;
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
    </RcordGraphContainer>
  );
};

export default RecordGraph;
