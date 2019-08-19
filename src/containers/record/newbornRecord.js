import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import DefaultDialog from "../../components/organisms/dialogs/dialog";
import * as queries from "../../graphql/queries";
import Record3dModel from "../../components/organisms/3dModel/record3dModel/record3dModel";
import { propTypes } from "./propTypes/newbornRecord_propTypes";
import { defaultPropTypes } from "./propTypes/newbornRecord_defaultPropTypes";
import { Flex } from "../../theme/layout/grid.style";
import { ErrorDialog } from "../../components/molecules/snackbars/errorSnackBar/style/error.style";
import {
  RecordHeader,
  RecordDetail,
  RecordInfo
} from "../../components/organisms/record";
import {
  RecordGraph,
  NewbornParents,
  NewbornChilds,
  NewbornPartners
} from "./index";
import { returnNewbornRecordInfo } from "./newbornRecordHelpers";

const NewbornRecordWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const NewBornRecord = ({ id, setId, open, onClose, newbornModelInfo }) => {
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

              const returnParents = () => (
                <NewbornParents
                  loading={loading}
                  setId={setId}
                  parents={newbornRecordInfo.parents}
                />
              );

              const returnPartners = () => (
                <NewbornPartners
                  loading={loading}
                  setId={setId}
                  partners={newbornRecordInfo.partners}
                />
              );

              const returnChilds = () => (
                <NewbornChilds
                  loading={loading}
                  childs={newbornRecordInfo.childs}
                />
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
                    step={newbornRecordInfo.currentStep}
                    valueLoss={newbornRecordInfo.currentValueLoss}
                    entropy={newbornRecordInfo.currentEntropy}
                    setId={setId}
                    partners={returnPartners()}
                    parents={returnParents()}
                    childs={returnChilds()}
                  />
                  <Record3dModel
                    data-testid="newbornRecord3dModel"
                    loading={loading}
                    newbornModelInfo={newbornModelInfo}
                  />
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
