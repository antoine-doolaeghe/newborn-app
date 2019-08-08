import styled from "styled-components";
import { Theme } from "../../../../../theme/theme";

export const RecordHeaderWrapper = styled.section`
  align-items: center;
  background: mediumpurple;
  color: ${Theme.font.light};
  display: flex;
  font-size: ${Theme.fontSize.large};
  font-weight: ${Theme.weight.bold};
  height: ${Theme.spacing.xlarge};
  justify-content: space-between;
  padding: ${Theme.spacing.standard};
  padding-left: ${Theme.spacing.medium};
`;
