import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button.style";

const StyledRoundButton = styled(Button)`
  height: 55px;
  border-radius: 55px;
  width: ${props => {
    return props.width ? props.width : "55px";
  }};
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const RoundButton = ({ children, onClick, color, width }) => {
  return (
    <StyledRoundButton width={width} onClick={onClick} color={color}>
      {children}
    </StyledRoundButton>
  );
};
export default RoundButton;
