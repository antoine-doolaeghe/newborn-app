import React from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

export const StyledChip = styled(Chip)`
  margin: 5px 0px;
`;

const DefaultChip = props => {
  return <StyledChip {...props} />;
};

export default DefaultChip;
