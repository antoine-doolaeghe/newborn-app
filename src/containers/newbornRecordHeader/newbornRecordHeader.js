import React from 'react';
import { HeaderContainer, HeaderName, HeaderBornPlace, HeaderValueContainer, HeaderValue, HeaderPercentage } from './newbornRecordHeader.style';

function NewBornRecordHeader() {
  return (
    <HeaderContainer>
      <HeaderName />
      <HeaderBornPlace />
      <HeaderValueContainer>
        <HeaderValue />
        <HeaderPercentage />
      </HeaderValueContainer>
    </HeaderContainer>
  );
}

export default NewBornRecordHeader;
