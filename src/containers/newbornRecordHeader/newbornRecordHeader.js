import React from 'react';
import { HeaderContainer, HeaderName, HeaderInfo, HeaderInfoWrap, HeaderBornPlace, HeaderInfoContainer, HeaderValueContainer, HeaderValue, HeaderPercentage,
  HeaderInfoTitle, HeaderInfoContent } from './newbornRecordHeader.style';

function NewbornRecordHeader() {
  return (
    <HeaderContainer>
      <HeaderName>Header name</HeaderName>
      <HeaderBornPlace>Born place</HeaderBornPlace>
      <HeaderValueContainer>
        <HeaderValue>189</HeaderValue>
        <HeaderPercentage>18%</HeaderPercentage>
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
