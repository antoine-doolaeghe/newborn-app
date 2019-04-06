import styled from "styled-components";

export const NewbornCard = styled.section`
  border: 2px solid black;
  border-radius: 5px;
  height: 220px;
  position: relative;
  width: 220px;
  place-self: center;
  &:hover {
    background-color: ${props =>
      props.isNewbornOwnedByCurrentUser ? "red" : "lightgrey"};
  }
  background-color: ${props =>
    props.isNewbornOwnedByCurrentUser
      ? "red"
      : props.isSelected
      ? "lightgrey"
      : null};
`;

export const NewbornCardBuyButton = styled.button`
  bottom: 10px;
  border-radius: 5px;
  height: 20px;
  position: absolute;
  right: 10px;
  width: 50px;
`;
