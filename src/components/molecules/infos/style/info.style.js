import styled, { keyframes } from "styled-components";
import { Theme } from "../../../../theme/theme";

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

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin-right: ${Theme.spacing.standard};
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: ${Theme.weight.normal};
  margin-top: ${Theme.spacing.small};
  text-transform: uppercase;
`;

export const Value = styled.div`
  font-size: ${props => Theme.fontSize[props.fontSize]};
  font-weight: ${Theme.weight.bold};
  text-transform: capitalize;
`;

export const LabelIcon = styled.div`
  align-items: center;
  background-color: lightgreen;
  border-radius: 40px;
  color: white;
  display: flex;
  font-size: 30px;
  height: ${Theme.spacing.xxlarge};
  justify-content: center;
  margin: 10px 10px 10px 0px;
  width: ${Theme.spacing.xxlarge};
`;

export const LabelAvatar = styled.div`
  align-items: center;
  background-image: url(${props => props.avatar});
  background-size: 125%;
  border-radius: ${Theme.spacing.xlarge};
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  height: ${Theme.spacing.xxlarge};
  justify-content: center;
  margin: 10px 10px 10px 0px;
  width: ${Theme.spacing.xxlarge};
`;

export const LabelAvatarBorder = styled.div`
  border-radius: ${Theme.spacing.xlarge};
  border: 2px dashed black;
  height: 64px;
  position: absolute;
  width: 64px;
  &:hover {
    border: 2px dashed red;
    animation: ${rotate} 7s linear infinite;
  }
`;
