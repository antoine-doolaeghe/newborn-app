import React, { Fragment } from "react";
import PropTypes from "prop-types";
import RecordInfoLoader from "./loader/recordInfoLoader";
import { InfoWrapper, ValueWrapper } from "./style/recordInfo.style";
import Info from "../../../molecules/infos/info";
import { Badge } from "../../../atoms/badges";
import { Flex } from "../../../../theme/layout/grid.style";

function RecordInfo({
  loading,
  newbornInfo: { currentMeanReward, currentIndex, ownerUserName, bornPlace }
}) {
  const index = currentIndex > 0 ? `+${currentIndex}%` : `${currentIndex}%`;
  return (
    <InfoWrapper data-testid="newbornRecordHeader">
      {loading ? (
        <RecordInfoLoader />
      ) : (
        <Fragment>
          <ValueWrapper>
            <Flex align="center">
              <Info
                label="Current Reward"
                value={currentMeanReward}
                size="80px"
              />
              <Badge label={index} />
            </Flex>
          </ValueWrapper>
          <Flex height="auto">
            <Info label="Birthday" value={bornPlace} withIcon />
            <Info label="Own by" value={ownerUserName} withIcon />
          </Flex>
        </Fragment>
      )}
    </InfoWrapper>
  );
}

RecordInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired
};

export default RecordInfo;
