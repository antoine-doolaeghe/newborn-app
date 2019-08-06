import React from "react";
import Styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "../../buttons";
import { Theme } from "../../../../theme/theme";

const StyledIconButtoInput = Styled.div`
  align-items: center;
  display: flex;
  height: "55px";
  border: 1px solid;
  border-radius: ${Theme.radius.small};
  padding: 0 10px;
  margin: ${Theme.spacing.small};
`;

export default function IconButtoInput() {
  return (
    <StyledIconButtoInput>
      <InputBase placeholder="Find..." />
      <IconButton height="40px" width="40px" color="dark">
        <SearchIcon />
      </IconButton>
    </StyledIconButtoInput>
  );
}
