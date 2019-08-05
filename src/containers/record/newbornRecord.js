import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import DefaultDialog from "../../components/organisms/dialogs/dialog";
import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as queries from "../../graphql/queries";
import { Flex } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../components/molecules/snackbars/errorSnackBar/style/error.style";

import RecordGraph from "../../components/organisms/record/recordGraph";
import RecordInfo from "../../components/organisms/record/recordInfo/recordInfo";
import Record3dModel from "../../components/organisms/3dModel/record3dModel/record3dModel";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewbornRecordWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const NewBornRecord = ({ id, open, onClose, newbornModelInfo }) => {
  return (
    <DefaultDialog
      transitionDuration={350}
      onClose={onClose}
      open={open}
      maxWidth="lg"
    >
      {open && (
        <NewbornRecordWrapper>
          <Query query={gql(queries.getNewborn)} variables={{ id, limit: 2 }}>
            {({ data, loading, error }) => {
              if (error) {
                return <ErrorDialog open message={error.message} />;
              }
              const newbornRecordInfo = returnNewbornRecordInfo(
                data.getNewborn
              );
              return (
                <Fragment>
                  <Flex direction="row" margin="10px">
                    <RecordInfo
                      loading={loading}
                      newbornInfo={newbornRecordInfo}
                      data-testid="newbornRecordHeader"
                    />
                    <RecordGraph
                      loading={loading}
                      data-testid="newbornRecordGraph"
                      modelId={newbornRecordInfo.modelId}
                    />
                  </Flex>
                  <Flex direction="column">
                    <Record3dModel
                      loading={loading}
                      newbornModelInfo={newbornModelInfo}
                      data-testid="newbornRecord3dModel"
                    />
                  </Flex>
                </Fragment>
              );
            }}
          </Query>
        </NewbornRecordWrapper>
      )}
    </DefaultDialog>
  );
};

NewBornRecord.defaultProps = defaultPropTypes;

NewBornRecord.propTypes = propTypes;

export default NewBornRecord;
