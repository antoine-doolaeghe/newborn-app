import React from "react";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./cardHeader.style";
import { Badge } from "../../../../atoms/badges";

function CardHeader({ title, subTitle, displayBadge }) {
  return (
    <NewbornCardHeaderContainer>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      {displayBadge && <Badge />}
    </NewbornCardHeaderContainer>
  );
}

export default CardHeader;
