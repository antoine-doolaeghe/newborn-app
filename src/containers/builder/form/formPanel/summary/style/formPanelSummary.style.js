import styled from "styled-components";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

export const Heading = styled.div`
  font-size: 20px;
  flex-basis: 33.33%;
  flex-shrink: 0;
`;

export const SecondaryHeading = styled.div`
  font-size: 20px;
  flex-basis: 66.66%;
`;
