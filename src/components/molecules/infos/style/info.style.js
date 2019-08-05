import styled from "styled-components";

export const InfoContainer = styled.section`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  flex: ${props => props.flex || 1};
`;

export const InfoElement = styled.section`
  border-top: 1px dotted grey;
`;

export const InfoWrap = styled.div`
  display: grid;
  flex: 1;
  margin-right: 10px;
`;

export const InfoTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const InfoContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;
