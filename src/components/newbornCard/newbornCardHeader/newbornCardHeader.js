import React from "react";
import { withRouter } from "react-router";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./newbornCardHeader.style";
import { Info } from "../../../theme/chips/info.style";

function NewBornCardHeader(props) {
  return (
    <NewbornCardHeaderContainer
      onClick={() => {
        props.history.push({
          pathname: `/newborn-record`,
          search: `?id=${props.newbornId}`,
          state: {
            id: props.newbornId
          }
        });
      }}
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
