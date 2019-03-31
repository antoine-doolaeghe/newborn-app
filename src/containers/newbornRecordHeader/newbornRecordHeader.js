import React from 'react';
import { HeaderContainer, HeaderName, HeaderInfo, HeaderInfoWrap, HeaderBornPlace, HeaderInfoContainer, HeaderValueContainer, HeaderValue, HeaderPercentage,
  HeaderInfoTitle, HeaderInfoContent } from './newbornRecordHeader.style';
import { FlexContainer } from '../../theme/grid.style';

function NewbornRecordHeader() {
  return (
    <HeaderContainer>
      <FlexContainer flex={1} direction='column' margin='0px 20px'>
        <HeaderName>Header name</HeaderName>
        <HeaderBornPlace>Born place</HeaderBornPlace>
      </FlexContainer>
      <HeaderValueContainer>
        <FlexContainer align='baseline'>
          <HeaderValue>189</HeaderValue>
          <HeaderPercentage>18%</HeaderPercentage>
        </FlexContainer>
      </HeaderValueContainer>
      <HeaderInfoContainer>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
        <HeaderInfoWrap>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <HeaderInfoTitle>
              hello 1
            </HeaderInfoTitle>
            <HeaderInfoContent>
              hello 1
            </HeaderInfoContent>
          </HeaderInfo>
        </HeaderInfoWrap>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
}

export default NewbornRecordHeader;
