import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

export const Wrapper = styled.section`
  position: absolute;
  margin: 20px;
  top: 140px;
  width: 35%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 10;
`;

export const Heading = styled.div`
  flex-basis: 33.33%;
  flex-shrink: 0;
`;

export const SecondaryHeading = styled.div`
  flex-basis: 66.66%;
`;
