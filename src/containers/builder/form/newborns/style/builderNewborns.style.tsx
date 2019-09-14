import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Wrapper = styled.div`
  margin: 20px;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  position: absolute;
  height: 4px;
  width: 100%;
  top: 0px;
  left: 0px;
`;
