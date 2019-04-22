import styled from "styled-components";

export const NewbornCard = styled.section`
  border: ${props =>
    props.isPlaceholderCard
      ? "2px dashed black"
      : props.isNewbornOwnedByCurrentUser
      ? "2px solid red"
      : props.isSelected
      ? "2px solid green"
      : "2px solid black"};
  border-radius: 5px;
  height: 220px;
  position: relative;
  width: 220px;
  place-self: center;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
`;

export const NewbornCardBuyButton = styled.button`
  bottom: 10px;
  border-radius: 2px;
  border: 1px solid black;
  height: 23px;
  position: absolute;
  right: 10px;
  width: 45px;
  box-shadow: 0px;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
`;
