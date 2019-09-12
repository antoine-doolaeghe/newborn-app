import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

export const Wrapper = styled.div`
  flex: 1;
  margin: 20px;
`;

export const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 10;
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
