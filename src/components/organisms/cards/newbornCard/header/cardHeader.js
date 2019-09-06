import React from "react";
import PropTypes from "prop-types";
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

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  displayBadge: PropTypes.bool.isRequired
};

export default CardHeader;
