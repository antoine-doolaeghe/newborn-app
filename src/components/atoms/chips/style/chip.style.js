import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import { Theme } from "../../../../theme/theme";

const { spacing } = Theme;

export const StyledChip = styled(Chip)`
  margin: ${spacing.small};
`;
