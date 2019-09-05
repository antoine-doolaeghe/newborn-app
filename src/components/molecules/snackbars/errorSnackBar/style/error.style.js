import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import { Theme } from "../../../../../theme/theme";

export const ErrorDialog = styled(Snackbar)`
  background-color: ${Theme.palette.warning};
`;
