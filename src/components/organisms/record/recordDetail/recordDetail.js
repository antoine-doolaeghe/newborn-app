import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

import FaceIcon from "@material-ui/icons/Face";
import RecordDetailLoader from "./loader/recordDetailLoader";
import { DetailWrapper } from "./style/recordDetail.style";
import Chip from "../../../atoms/chips/chip";
import Info from "../../../molecules/infos/info";
import { Flex } from "../../../../theme/layout/grid.style";

function RecordDetail({ loading, parents, childs }) {
  return (
    <DetailWrapper data-testid="newbornRecordHeader">
      {loading ? (
        <RecordDetailLoader />
      ) : (
        <Flex direction="row">
          <Flex flex={1}>
            <Info label="Parents" value={parents} />
            <Info label="Childs" value={childs} />
            <Info
              label="Trainer"
              value={
                <Chip
                  variant="outlined"
                  label="Trainer"
                  onClick={() => {
                    console.log("HERE");
                  }}
                  avatar={
                    <Avatar>
                      <FaceIcon />
                    </Avatar>
                  }
                />
              }
            />
          </Flex>
          <Flex width="100%" flex={1}>
            <Info label="Environment Statistics" value="10.3" />
            <Info label="Policy Statistics" value="13.2" />
            <Info label="Learning Loss" value="34" />
          </Flex>
        </Flex>
      )}
    </DetailWrapper>
  );
}

RecordDetail.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default RecordDetail;
