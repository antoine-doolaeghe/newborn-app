import styled from "styled-components";

export const InfoContainer = styled.section`
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  flex: ${props => props.flex || 1};
`;

export const InfoIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background: grey;
  right: 0px;
  bottom: 0px;
`;

export const Info = styled.section`
  font-size: 20px;
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
