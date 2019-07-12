import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button.style";

const StyledIconButton = styled(Button)`
  height: 55px;
  width: ${props => {
    return props.width ? props.width : "55px";
  }};
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const IconButton = ({ children, onClick, color, width }) => {
  return (
    <StyledIconButton width={width} onClick={onClick} color={color}>
      {children}
    </StyledIconButton>
  );
};
export default IconButton;
