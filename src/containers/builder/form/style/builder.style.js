import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  max-height: calc(100vh - 150px);
  overflow-y: scroll;
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
