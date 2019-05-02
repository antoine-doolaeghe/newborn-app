import React from "react";
import {
  HeaderContainer,
  HeaderName,
  HeaderValue,
  HeaderValueContainer
} from "./newbornRecordHeader.style";
import {
  InfoContainer,
  Info,
  InfoIcon,
  InfoWrap,
  InfoTitle,
  InfoContent
} from "../../theme/infos/info.style";
import { InfoChip } from "../../theme/chips/info.style";
import { Button } from "../../theme/buttons/button.style";
import { FlexContainer } from "../../theme/layout/grid.style";

function NewbornRecordHeader() {
  return (
    <HeaderContainer data-testid="newbornRecordHeader">
      <FlexContainer flex={0.5} direction="column" margin="8px 10px">
        <FlexContainer width="100%" justify="space-between">
          <HeaderName>Header name</HeaderName>
          <Button color="primary">Buy now</Button>
        </FlexContainer>
      </FlexContainer>
      <HeaderValueContainer>
        <FlexContainer align="center">
          <HeaderValue>189,45</HeaderValue>
          <InfoChip>18%</InfoChip>
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

export default NewbornRecordHeader;
