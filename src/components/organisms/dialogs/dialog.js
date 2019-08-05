import React, { Fragment } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "../../molecules/buttons/button.style";

const StyledDialog = styled(Dialog)``;

const DialogActionButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const DialogCancelButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const DefaultDialog = ({ onClose, open, children }) => {
  const returnDialogButton = () => {
    return (
      <Fragment>
        <DialogActionButton color="primary">Buy now</DialogActionButton>
        <DialogCancelButton color="secondary">Cancel</DialogCancelButton>
      </Fragment>
    );
  };

  return (
    <StyledDialog
      onClose={onClose}
      open={open}
      transitionDuration={350}
      maxWidth="lg"
    >
      {children}
      {returnDialogButton()}
    </StyledDialog>
  );
};
export default DefaultDialog;
