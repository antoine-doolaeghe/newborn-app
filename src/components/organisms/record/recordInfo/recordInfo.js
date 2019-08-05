import React, { Fragment } from "react";
import PropTypes from "prop-types";
import RecordInfoLoader from "./loader/recordInfoLoader";
import {
  InfoWrapper,
  InfoTitle,
  HeaderValue,
  ValueWrapper
} from "./style/recordInfo.style";
import Info from "../../../molecules/infos/info";
import { Badge } from "../../../atoms/badges";
import { Flex } from "../../../../theme/layout/grid.style";

function RecordInfo({
  loading,
  newbornInfo: {
    currentMeanReward,
    currentIndex,
    trainingStage,
    name,
    bornPlace
  }
}) {
  const index = currentIndex > 0 ? `+${currentIndex}%` : `${currentIndex}%`;
  return (
    <InfoWrapper data-testid="newbornRecordHeader">
      {loading ? (
        <RecordInfoLoader />
      ) : (
        <Fragment>
          <Flex flex={0.5} direction="column">
            <Flex width="100%" align="center" justify="space-between">
              <InfoTitle>{name}</InfoTitle>
            </Flex>
          </Flex>
          <ValueWrapper>
            <Flex align="center">
              <Info
                label="Current Reward"
                value={currentMeanReward}
                size="60px"
              />
              <Badge label={index} />
            </Flex>
          </ValueWrapper>
          <Flex flex={1}>
            <Info label="Birthday" value={bornPlace} withIcon />
            <Info label="Own by" value="english" withIcon />
          </Flex>
          <Flex flex={1}>
            <Info label="Environment Statistics" value="10.3" />
            <Info label="Policy Statistics" value="13.2" />
            <Info label="Learning Loss" value="34" />
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
