import React from "react";
import { withRouter } from "react-router-dom";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./cardHeader.style";
import { InfoChip } from "../../../../theme/chips/info.style";

function NewBornCardHeader({ history, newbornId, title, subTitle }) {
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
      <InfoChip>+ 5%</InfoChip>
    </NewbornCardHeaderContainer>
  );
}

export default withRouter(NewBornCardHeader);
