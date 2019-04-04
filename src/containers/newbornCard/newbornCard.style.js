import styled from "styled-components";

export const NewbornCard = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 220px;
  position: relative;
  width: 220px;
  place-self: center;
  background-color: ${props => (props.isSelected ? "lightgrey" : null)};
  &:hover {
    background-color: lightgrey;
  }
`;

export const NewbornCardBuyButton = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
`;
