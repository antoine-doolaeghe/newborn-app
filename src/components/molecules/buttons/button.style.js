import styled from "styled-components";
import { Theme } from "../../../theme/theme";

export const Button = styled.button`
  align-items: center;
  background: ${props => Theme.palette[props.color].main};
  border-radius: ${Theme.radius.medium};
  border: none;
  color: ${Theme.font.light};
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.weight.normal};
  justify-content: space-around;
  margin: ${Theme.spacing.small};
  outline: none;
  padding: 3px 7px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    background: ${props => Theme.palette[props.color].dark};
  }
`;
