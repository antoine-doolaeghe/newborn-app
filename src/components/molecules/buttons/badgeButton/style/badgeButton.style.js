import styled from "styled-components";
import { Theme } from "../../../../../theme/theme";
import { StyledDefaultButton } from "../../defaultButton/style/defaultButton.style";

export const StyledBadgeButton = styled(StyledDefaultButton)`
  align-items: center;
  background: ${props => Theme.palette[props.color].main};
  border-radius: ${Theme.radius.small};
  border: none;
  color: ${Theme.font.light};
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.xsmall};
  font-weight: ${Theme.weight.normal};
  justify-content: space-around;
  margin: ${Theme.spacing.small};
  outline: none;
  padding: 3px 7px;
  width: fit-content;
`;
