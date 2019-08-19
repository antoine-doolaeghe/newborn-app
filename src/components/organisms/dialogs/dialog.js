import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

const StyledDialog = styled(Dialog)``;

const DefaultDialog = ({ onClose, open, children }) => {
  return (
    <StyledDialog
      onClose={onClose}
      open={open}
      transitionDuration={350}
      maxWidth="lg"
    >
      {children}
    </StyledDialog>
  );
};
export default DefaultDialog;
