import styled from "styled-components";
import { Theme } from "../../../../theme/theme";

const DefaultButton = styled.button`
  align-items: center;
  /* background: linear-gradient(${props =>
    Theme.palette[props.color].light},${props =>
  Theme.palette[props.color].main}) no-repeat;
  box-shadow: 0 7px 14px -3px ${props =>
    Theme.palette[props.color].dark}, 0 2px 4px 0 ${props =>
  Theme.palette[props.color].dark}, inset 0 -2px 0 0 #${props =>
  Theme.palette[props.color].main}; */
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
  will-change: box-shadow,transform;
  &:hover {
    cursor: pointer;
    /* transform: translateY(-2px); */
    /* box-shadow: 0 11px 16px -3px rgba(45,35,66,0.3), 0 4px 5px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 #cfd1e3; */
    background: ${props => Theme.palette[props.color].dark};
  }
   &:active {
    cursor: pointer;
    /* transform: translateY(-2px); */
    /* box-shadow: inset 0 2px 0 1px rgba(132,138,184,0.11), inset 0 2px 9px 0 rgba(93,100,148,0.5), inset 0 -1px 0 1px #e4e4e9; */
    background: ${props => Theme.palette[props.color].dark};
  }
`;

export default DefaultButton;
