import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

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
  cursor: pointer;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  background-image: url(${props => props.avatar});
  background-size: 125%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid white; */
`;

export const InfoLabelAvatarBorder = styled.div`
  border: 2px dashed black;
  border-radius: 40px;
  position: absolute;
  width: 64px;
  height: 64px;
  &:hover {
    border: 2px dashed red;
    animation: ${rotate} 7s linear infinite;
  }
`;
