import styled from "styled-components";
import { colors } from "../../../theme/theme";

export const Button = styled.button`
  background: ${props => colors[props.color].main};
  border: ${props => `2px solid${colors[props.color].dark}`};
  border-radius: 2px;
  color: ${props => colors[props.color].contrastText};
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  height: 30px;
  margin: 10px;
  min-height: 3rem;
  padding: 0.875rem 63px 0.875rem 15px;
  padding: 1;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const BuyButton = styled.button`
  background: ${props => colors[props.color].main};
  border: ${props => `2px solid${colors[props.color].dark}`};
  border-radius: 2px;
  color: ${props => colors[props.color].contrastText};
  font-size: 0.875rem;
  font-weight: 400;
  height: 20px;
  width: 35px;
  padding: 2px 7px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
