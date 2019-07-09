import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme/theme";

export const StyledBadgeButton = styled.button`
  background: ${props => colors[props.color].main};
  border: none;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 3px 7px;
  margin: 5px;
  outline: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  }
`;

const BadgeButton = ({ children, onClick, color }) => {
  return (
    <StyledBadgeButton onClick={onClick} color={color}>
      {children}
    </StyledBadgeButton>
  );
};
export default BadgeButton;
