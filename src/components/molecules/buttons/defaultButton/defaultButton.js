import styled from "styled-components";
import { Theme } from "../../../../theme/theme";

const DefaultButton = styled.button`
  align-items: center;
  background: ${props => Theme.palette[props.color].main};
  border-radius: ${Theme.radius.small};
  border: none;
  color: ${props => Theme.palette[props.color].contrastText};
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.weight.normal};
  justify-content: space-around;
  margin: ${Theme.spacing.small};
  outline: none;
  padding: 3px 7px;
  will-change: background;
  &:hover {
    cursor: pointer;
    background: ${props => Theme.palette[props.color].dark};
  }
  &:active {
    cursor: pointer;
    background: ${props => Theme.palette[props.color].dark};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${props => Theme.palette[props.color].light};
  }
`;

export default DefaultButton;
