import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

export const StyledDialog = styled(Dialog)``;

const DefaultDialog = ({ onClose, open, children }) => {
  return (
    <StyledDialog onClose={onClose} open={open}>
      {children}
    </StyledDialog>
  );
};
export default DefaultDialog;
