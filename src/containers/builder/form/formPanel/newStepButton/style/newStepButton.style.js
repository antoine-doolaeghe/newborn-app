import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

export const StyledExpansionPanel = styled(ExpansionPanel)`
  min-height: 48;
  display: "flex";
  align-items: "center";
  cursor: "pointer";
`;

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
  height: 50px;
`;
