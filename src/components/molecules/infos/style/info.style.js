import styled from "styled-components";

export const InfoElement = styled.section`
  width: 105px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : "18px")};
  font-weight: 600;
  text-transform: capitalize;
`;

export const InfoLabelIcon = styled.div`
  margin: 10px 10px 10px 0px;
  width: 55px;
  height: 55px;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoLabelAvatar = styled.div`
  margin: 10px 10px 10px 0px;
  width: 55px;
  height: 55px;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  background-image: url(${props => props.avatar});
  background-size: 125%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
