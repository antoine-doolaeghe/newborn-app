import React from "react";
import { withRouter } from "react-router";
import { withAuthenticator } from "aws-amplify-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as queries from "../../graphql/queries";

import { FlexContainer } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../theme/snackbars/error.style";

import withHeader from "../header/withHeader";

import {
  NewbornRecordGraph,
  NewbornRecordHeader,
  NewbornRecord3dModel,
  NewbornPrediction
} from "../../components/newbornRecord";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewBornRecord = props => {
  const { newbornPredictionLoading, location } = props;
  return (
    <Query
      query={gql(queries.getNewborn)}
      variables={{ id: location.state.id }}
    >
      {({ data, loading, error }) => {
        if (error) {
          return <ErrorDialog open message={error.message} />;
        }

        if (loading) {
          return "loading";
        }

        const newbornRecordInfo = returnNewbornRecordInfo(data.getNewborn);

        return (
          <React.Fragment>
            <FlexContainer>
              <FlexContainer
                direction="column"
                width="500px"
                max-width="500px"
                margin="10px"
              >
                <NewbornRecordHeader
                  newbornInfo={newbornRecordInfo}
                  data-testid="newbornRecordHeader"
                />
                <NewbornRecord3dModel
                  newbornModelInfo={props.newbornModelInfo}
                  data-testid="newbornRecord3dModel"
                />
              </FlexContainer>
              <FlexContainer
                direction="column"
                width="500px"
                max-width="500px"
                margin="10px"
              >
                <NewbornRecordGraph
                  data-testid="newbornRecordGraph"
                  newbornModel={newbornRecordInfo.model}
                />
                <NewbornPrediction
                  data-testid="newBornRecordPrediction"
                  newbornPredictionLoading={newbornPredictionLoading}
                />
              </FlexContainer>
            </FlexContainer>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

NewBornRecord.defaultPropTypes = defaultPropTypes;

NewBornRecord.propTypes = propTypes;

export default withAuthenticator(withHeader(withRouter(NewBornRecord)));
