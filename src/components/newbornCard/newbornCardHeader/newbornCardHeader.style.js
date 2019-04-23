import styled from "styled-components";

export const NewbornCardHeaderContainer = styled.section`
  border-bottom: 1px dotted black;
  display: flex;
  justify-content: space-between;
  padding: 7px 0px;
  margin: 0px 7px;
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

export const Info = styled.div`
  background-color: lightgreen;
  border-radius: 2px;
  border: 1px dotted green;
  font-size: 15px;
  font-weight: 400;
  height: 100%;
  margin: 5px;
  padding: 2px 7px;
`;
