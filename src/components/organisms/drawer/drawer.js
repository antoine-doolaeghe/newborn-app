import React from "react";
import styled from "styled-components";

export const StyledDrawer = styled.section`
  position: absolute;
  border-radius: 2px;
  display: ${props => (props.open ? "block" : "none")}
  width: 300px;
  height: 600px;
  border: 3px solid red;
  background: white;
  z-index: 15;
  top: 70px;
  left: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

const Drawer = ({ onClose, open, children }) => {
  return (
    <StyledDrawer onClose={onClose} open={open}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
