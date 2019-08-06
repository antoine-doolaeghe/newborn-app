import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import DefaultDialog from "../../../components/organisms/dialogs/dialog";
import { propTypes } from "./newbornRecord_propTypes";
import { defaultPropTypes } from "./newbornRecord_defaultPropTypes";
import * as queries from "../../../graphql/queries";
import { Flex } from "../../../theme/layout/grid.style";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import {
  RecordHeader,
  RecordDetail,
  RecordInfo,
  RecordGraph
} from "../../../components/organisms/record";
import NewbornParents from "../newbornParents/newbornParents";
import NewbornChilds from "../newbornChilds/newbornChilds";
import Record3dModel from "../../../components/organisms/3dModel/record3dModel/record3dModel";

import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewbornRecordWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const NewBornRecord = ({ id, open, onClose, newbornModelInfo }) => {
  return (
    <DefaultDialog
      maxWidth="lg"
      onClose={onClose}
      open={open}
      transitionDuration={350}
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
                  <RecordHeader
                    loading={loading}
                    onClose={onClose}
                    title={newbornRecordInfo.name}
                  />
                  <Flex direction="row">
                    <RecordInfo
                      data-testid="newbornRecordHeader"
                      loading={loading}
                      newbornInfo={newbornRecordInfo}
                    />
                    <RecordGraph
                      data-testid="newbornRecordGraph"
                      loading={loading}
                      modelId={newbornRecordInfo.modelId}
                    />
                  </Flex>
                  <RecordDetail
                    parents={
                      <NewbornParents
                        loading={loading}
                        parents={newbornRecordInfo.parents}
                      />
                    }
                    childs={
                      <NewbornChilds
                        loading={loading}
                        childs={newbornRecordInfo.childs}
                      />
                    }
                  />
                  <Flex direction="column">
                    <Record3dModel
                      data-testid="newbornRecord3dModel"
                      loading={loading}
                      newbornModelInfo={newbornModelInfo}
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
