import React from "react";
import Styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "../../buttons";
import { Theme } from "../../../../theme/theme";

const StyledIconButtonInput = Styled.div`
  align-items: center;
  display: flex;
  height: ${Theme.spacing.xxlarge};
  background-color: #faf2ed;
  border-radius: ${Theme.radius.small};
  justify-content: space-between;
  padding: ${Theme.spacing.medium} ${Theme.spacing.large};
  margin: ${Theme.spacing.small};
`;

const StyledInputBase = Styled(InputBase)`
  font-size: 24px !important;
`;

export default function IconButtonInput() {
  return (
    <StyledIconButtonInput>
      <StyledInputBase autoFocus fullWidth placeholder="Find..." />
      <IconButton height="40px" width="40px" color="default">
        <SearchIcon />
      </IconButton>
    </StyledIconButtonInput>
  );
}
