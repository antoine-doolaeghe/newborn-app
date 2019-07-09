import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as queries from "../../graphql/queries";
import { FlexContainer } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../components/snackbars/errorSnackBar/style/error.style";

import RecordGraph from "../../components/graphs/recordGraph/recordGraph";
import RecordHeader from "../../components/cards/recordHeaderCard/recordHeader";
import Record3dModel from "../../components/3dModel/record3dModel/record3dModel";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewBornRecord = props => {
  const { newbornPredictionLoading, location } = props;
  console.log(props.id);
  return (
    <Dialog
      onClose={props.onClose}
      open={props.open}
      aria-labelledby="simple-dialog-title"
    >
      <FlexContainer>
        <Query query={gql(queries.getNewborn)} variables={{ id: props.id }}>
          {({ data, loading, error }) => {
            if (error) {
              return <ErrorDialog open message={error.message} />;
            }

            if (loading || !data.getNewborn) {
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
    </Dialog>
  );
};

NewBornRecord.defaultPropTypes = defaultPropTypes;

NewBornRecord.propTypes = propTypes;

export default NewBornRecord;
