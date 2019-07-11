import React from "react";
import styled from "styled-components";

export const StyledDrawer = styled.section`
  position: absolute;
  display: ${props => (props.open ? "block" : "none")}
  width: 300px;
  height: 600px;
  border: 3px solid;
  background: white;
  z-index: 15;
  top: 70px;
`;

const Drawer = ({ onClose, open, children }) => {
  return (
    <StyledDrawer onClose={onClose} open={open}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
