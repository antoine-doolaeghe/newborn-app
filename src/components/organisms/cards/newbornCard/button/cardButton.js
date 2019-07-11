import React from "react";
import styled from "styled-components";
import { BadgeButton } from "../../../../molecules/buttons";
import { colors } from "../../../../../theme/theme";

export const IconLabelWrapper = styled.div`
  background: white;
  border-radius: 10px;
  color: ${props => colors[props.color].main};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 0.9rem;
  height: 17px;
  width: 17px;
  margin: 5px;
`;

function CardButton({ onClick, color, iconLabel, label }) {
  return (
    <BadgeButton color={color} onClick={onClick}>
      <IconLabelWrapper color={color}>{iconLabel}</IconLabelWrapper>
      {label}
    </BadgeButton>
  );
}

export default CardButton;
