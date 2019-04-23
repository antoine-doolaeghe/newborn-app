import React from "react";
import { withRouter } from "react-router";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle,
  Info
} from "./newbornCardHeader.style";

function NewBornCardHeader(props) {
  console.log(props.history);
  return (
    <NewbornCardHeaderContainer
      onClick={() => props.history.push(`./newborn-record/${props.newbornId}`)}
    >
      <div>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </div>
      <Info>+ 5%</Info>
    </NewbornCardHeaderContainer>
  );
}

export default withRouter(NewBornCardHeader);
