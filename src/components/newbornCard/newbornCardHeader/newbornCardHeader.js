import React from "react";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle,
  Info
} from "./newbornCardHeader.style";

function NewBornCardHeader(props) {
  return (
    <NewbornCardHeaderContainer>
      <div>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </div>
      <Info>+5%</Info>
    </NewbornCardHeaderContainer>
  );
}

export default NewBornCardHeader;
