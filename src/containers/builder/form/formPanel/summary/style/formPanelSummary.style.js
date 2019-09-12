import styled from "styled-components";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  /* flex-basis: 33.33%; */
  flex-shrink: 0;
`;

export const SecondaryHeading = styled.div`
  flex-basis: 66.66%;
`;
