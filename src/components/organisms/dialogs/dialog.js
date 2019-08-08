import React, { Fragment } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { BuyButton } from "../../molecules/buttons";

const StyledDialog = styled(Dialog)``;

const DialogActionButton = styled(BuyButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px 15px;
`;

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
