import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { withAuthenticator } from "aws-amplify-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CircularProgress from "@material-ui/core/CircularProgress";

import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as queries from "../../graphql/queries";
import { FlexContainer } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../components/snackbars/errorSnackBar/style/error.style";

import withHeader from "../header/withHeader";

import RecordGraph from "../../components/graphs/recordGraph/recordGraph";
import RecordHeader from "../../components/cards/recordHeaderCard/recordHeader";
import Record3dModel from "../../components/3dModel/record3dModel/record3dModel";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewBornRecord = props => {
  const { newbornPredictionLoading, location } = props;
  return (
    <FlexContainer>
      <Query
        query={gql(queries.getNewborn)}
        variables={{ id: location.state.id }}
      >
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }

          if (loading) {
            return (
              <CircularProgress
                variant="indeterminate"
                data-testid="newbornListLoading"
              />
            );
          }

          const newbornRecordInfo = returnNewbornRecordInfo(data.getNewborn);

          return (
            <Fragment>
              <FlexContainer
                direction="column"
                width="500px"
                max-width="500px"
                margin="10px"
              >
                <RecordHeader
                  newbornInfo={newbornRecordInfo}
                  data-testid="newbornRecordHeader"
                />
                <Record3dModel
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
                <RecordGraph
                  data-testid="newbornRecordGraph"
                  newbornModel={newbornRecordInfo.model}
                />
              </FlexContainer>
            </Fragment>
          );
        }}
      </Query>
    </FlexContainer>
  );
};

NewBornRecord.defaultPropTypes = defaultPropTypes;

NewBornRecord.propTypes = propTypes;

export default withAuthenticator(withHeader(withRouter(NewBornRecord)));
