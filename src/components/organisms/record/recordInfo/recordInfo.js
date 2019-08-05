import React from "react";
import PropTypes from "prop-types";
import {
  InfoWrapper,
  InfoTitle,
  HeaderValue,
  ValueWrapper
} from "./style/recordInfo.style";
import Info from "../../../molecules/infos/info";
import { InfoContainer } from "../../../molecules/infos/style/info.style";
import { Badge } from "../../../atoms/badges";
import { Flex } from "../../../../theme/layout/grid.style";

function RecordInfo(props) {
  const { newbornInfo } = props;
  const currentStepMeanReward = newbornInfo
    ? newbornInfo.currentStepMeanReward
    : "";
  const trainingStage = newbornInfo ? newbornInfo.trainingStage : "";
  const name = newbornInfo ? newbornInfo.name : "";

  return (
    <InfoWrapper data-testid="newbornRecordHeader">
      <Flex flex={0.5} direction="column">
        <Flex width="100%" justify="space-between">
          <InfoTitle>{name}</InfoTitle>
        </Flex>
      </Flex>
      <ValueWrapper>
        <Flex align="center">
          <HeaderValue>{currentStepMeanReward}</HeaderValue>
          <Badge label={trainingStage} />
        </Flex>
      </ValueWrapper>
      <InfoContainer>
        <Info label="Birthday" value={newbornInfo.bornPlace} />
        <Info label="Own by" value="english" />
      </InfoContainer>
      <InfoContainer>
        <Info label="Environment Statistics" value="10.3" />
        <Info label="Policy Statistics" value="13.2" />
        <Info label="Learning Loss" value="34" />
      </InfoContainer>
    </InfoWrapper>
  );
}

RecordInfo.defaultPropTypes = {
  newbornInfo: {
    developmentStage: "",
    currentStep: ""
  }
};

RecordInfo.propTypes = {
  newbornInfo: PropTypes.object.isRequired
};

export default RecordInfo;
