import React from "react";
import Styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const SearchInputWrapper = Styled.div`
  display: flex;
  height: "55px";
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
`;

export default function CustomizedInputBase() {
  return (
    <SearchInputWrapper>
      <InputBase placeholder="Search" />
      <IconButton aria-label="Search">
        <SearchIcon />
      </IconButton>
    </SearchInputWrapper>
  );
}
