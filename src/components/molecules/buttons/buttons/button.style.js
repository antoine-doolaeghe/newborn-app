import styled from "styled-components";
import { colors } from "../../../../theme/theme";

export const Button = styled.button`
  align-items: center;
  background: ${props => colors[props.color].main};
  border-radius: 5px;
  border: none;
  color: white;
  display: flex;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  justify-content: space-around;
  margin: 5px;
  outline: none;
  padding: 3px 7px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  }
`;
