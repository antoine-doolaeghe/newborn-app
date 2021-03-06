import React from "react";
import PropTypes from "prop-types";

import RecordDetailLoader from "./loader/recordDetailLoader";
import Info from "../../../molecules/infos/info";
import { DetailWrapper } from "./style/recordDetail.style";
import { Flex } from "../../../../theme/layout/grid.style";

function RecordDetail({
  loading,
  parents,
  partners,
  childs,
  entropy,
  valueLoss,
  step
}) {
  return (
    <DetailWrapper data-testid="newbornRecordHeader">
      {loading ? (
        <RecordDetailLoader />
      ) : (
        <Flex direction="row">
          <Flex flex={1}>
            <Info label="Parents" value={parents} />
            <Info label="Childs" value={childs} />
            <Info label="Partners" value={partners} />
          </Flex>
          <Flex width="100%" flex={1}>
            <Info label="Step" value={step} />
            <Info label="Entropy" value={entropy} />
            <Info label="Value Loss" value={valueLoss} />
          </Flex>
        </Flex>
      )}
    </DetailWrapper>
  );
}

RecordDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  parents: PropTypes.node.isRequired,
  childs: PropTypes.node.isRequired,
  partners: PropTypes.node.isRequired,
  step: PropTypes.node.isRequired,
  entropy: PropTypes.node.isRequired,
  valueLoss: PropTypes.node.isRequired
};

export default RecordDetail;
