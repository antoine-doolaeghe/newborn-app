import React from "react";
import { withRouter } from "react-router-dom";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./cardHeader.style";
import { Badge } from "../../../badges";

function CardHeader({ history, newbornId, title, subTitle }) {
  return (
    <NewbornCardHeaderContainer
      onClick={() => {
        history.push({
          pathname: `/newborn-record`,
          search: `?id=${newbornId}`,
          state: {
            id: newbornId
          }
        });
      }}
    >
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      <Badge />
    </NewbornCardHeaderContainer>
  );
}

export default withRouter(CardHeader);
