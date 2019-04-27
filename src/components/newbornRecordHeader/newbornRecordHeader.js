import React from "react";
import {
  HeaderContainer,
  HeaderName,
  HeaderInfo,
  HeaderInfoWrap,
  HeaderInfoContainer,
  HeaderInfoIcon,
  HeaderValueContainer,
  HeaderValue,
  HeaderInfoTitle,
  HeaderInfoContent
} from "./newbornRecordHeader.style";
import { Info } from "../../theme/chips/info.style";
import { Button } from "../../theme/buttons/button.style";
import { FlexContainer } from "../../theme/layout/grid.style";

function NewbornRecordHeader() {
  return (
    <HeaderContainer data-testid="newbornRecordHeader">
      <FlexContainer flex={0.5} direction="column" margin="8px 10px">
        <FlexContainer width="100%" justify="space-between">
          <HeaderName>Header name</HeaderName>
          <Button>Buy now</Button>
        </FlexContainer>
      </FlexContainer>
      <HeaderValueContainer>
        <FlexContainer align="center">
          <HeaderValue>189,45</HeaderValue>
          <Info>18%</Info>
        </FlexContainer>
      </HeaderValueContainer>
      <HeaderInfoContainer>
        <HeaderInfoIcon />
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>Born place</HeaderInfoTitle>
            <HeaderInfoContent>San Morino</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>Language</HeaderInfoTitle>
            <HeaderInfoContent>Engligh</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>hello 1</HeaderInfoTitle>
            <HeaderInfoContent>hello 1</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
      </HeaderInfoContainer>
      <HeaderInfoContainer>
        <HeaderInfoIcon />
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>Environment Statistics</HeaderInfoTitle>
            <HeaderInfoContent>10.3</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>Policy Statistics</HeaderInfoTitle>
            <HeaderInfoContent>13.2</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>Learning Loss</HeaderInfoTitle>
            <HeaderInfoContent>34</HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
}

export default NewbornRecordHeader;
