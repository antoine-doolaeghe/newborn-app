import React from "react";
import {
  NewbornCardHeaderContainer,
  Title,
  SubTitle
} from "./cardHeader.style";
import { Badge } from "../../../../atoms/badges";

function CardHeader({ title, subTitle }) {
  return (
    <NewbornCardHeaderContainer>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      <Badge />
    </NewbornCardHeaderContainer>
  );
}

export default CardHeader;
