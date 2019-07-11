import React from "react";
import PropTypes from "prop-types";
import {
  HeaderContainer,
  HeaderName,
  HeaderValue,
  HeaderValueContainer
} from "./recordHeader.style";
import {
  InfoContainer,
  Info,
  InfoIcon,
  InfoWrap,
  InfoTitle,
  InfoContent
} from "./infos/info.style";
import { Badge } from "../../../atoms/badges";
import { Button } from "../../../molecules/buttons/buttons/button.style";
import { FlexContainer } from "../../../../theme/layout/grid.style";

function RecordHeader(props) {
  const { newbornInfo } = props;
  const currentStepMeanReward = newbornInfo
    ? newbornInfo.currentStepMeanReward
    : "";
  const trainingStage = newbornInfo ? newbornInfo.trainingStage : "";
  const name = newbornInfo ? newbornInfo.id : "";
  return (
    <HeaderContainer data-testid="newbornRecordHeader">
      <FlexContainer flex={0.5} direction="column" margin="8px 10px">
        <FlexContainer width="100%" justify="space-between">
          <HeaderName>{name}</HeaderName>
          <Button color="primary">Buy now</Button>
        </FlexContainer>
      </FlexContainer>
      <HeaderValueContainer>
        <FlexContainer align="center">
          <HeaderValue>{currentStepMeanReward}</HeaderValue>
          <Badge label={trainingStage} />
        </FlexContainer>
      </HeaderValueContainer>
      <InfoContainer>
        <InfoIcon />
        <InfoWrap>
          <Info>
            <InfoTitle>Born place</InfoTitle>
            <InfoContent>San Morino</InfoContent>
          </Info>
        </InfoWrap>
        <InfoWrap>
          <Info>
            <InfoTitle>Language</InfoTitle>
            <InfoContent>Engligh</InfoContent>
          </Info>
        </InfoWrap>
        <InfoWrap>
          <Info>
            <InfoTitle>hello 1</InfoTitle>
            <InfoContent>hello 1</InfoContent>
          </Info>
        </InfoWrap>
      </InfoContainer>
      <InfoContainer>
        <InfoIcon />
        <InfoWrap>
          <Info>
            <InfoTitle>Environment Statistics</InfoTitle>
            <InfoContent>10.3</InfoContent>
          </Info>
        </InfoWrap>
        <InfoWrap>
          <Info>
            <InfoTitle>Policy Statistics</InfoTitle>
            <InfoContent>13.2</InfoContent>
          </Info>
        </InfoWrap>
        <InfoWrap>
          <Info>
            <InfoTitle>Learning Loss</InfoTitle>
            <InfoContent>34</InfoContent>
          </Info>
        </InfoWrap>
      </InfoContainer>
    </HeaderContainer>
  );
}

RecordHeader.defaultPropTypes = {
  newbornInfo: {
    developmentStage: "",
    currentStep: ""
  }
};

RecordHeader.propTypes = {
  newbornInfo: PropTypes.object.isRequired
};

export default RecordHeader;
