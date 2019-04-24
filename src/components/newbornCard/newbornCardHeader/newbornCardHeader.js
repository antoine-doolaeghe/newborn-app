import React from "react";
import { withRouter } from "react-router";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./newbornCardHeader.style";
import { Info } from "../../../theme/info.style";

function NewBornCardHeader(props) {
  return (
    <NewbornCardHeaderContainer
      onClick={() =>
        props.history.push(`./newborn-record?newborn_id=${props.newbornId}`)
      }
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
