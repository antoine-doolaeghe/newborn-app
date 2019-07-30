import React from "react";
import styled from "styled-components";
import { BadgeButton } from "../../../../molecules/buttons";
import { Theme } from "../../../../../theme/theme";

export const IconLabelWrapper = styled.div`
  background: ${Theme.palette.default.main};
  border-radius: ${Theme.radius.small};
  color: ${props => Theme.palette[props.color].main};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${Theme.weight.bold};
  text-transform: capitalize;
  height: ${Theme.spacing.msmall};
  width: ${Theme.spacing.msmall};
  margin: ${Theme.spacing.small};
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
