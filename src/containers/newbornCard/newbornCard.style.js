import styled from "styled-components";

export const NewbornCard = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 220px;
  position: relative;
  width: 220px;
  place-self: center;
  background-color: ${props =>
    props.isCurrentUserOwnership
      ? "red"
      : props.isSelected
      ? "lightgrey"
      : null};
  &:hover {
    background-color: lightgrey;
  }
`;

export const NewbornCardBuyButton = styled.button`
  bottom: 10px;
  border-radius: 5px;
  height: 20px;
  position: absolute;
  right: 10px;
  width: 50px;
`;
