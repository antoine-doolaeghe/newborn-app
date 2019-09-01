import styled from "styled-components";

export const NewbornCardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  margin: 3px 5px 2px 5px;
  text-transform: capitalize;
  z-index: 90;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  margin: 5px;
`;

export const SubTitle = styled.h5`
  font-size: 12px;
  font-weight: 400;
  margin: 5px;
  color: #555;
  text-transform: uppercase;
`;
