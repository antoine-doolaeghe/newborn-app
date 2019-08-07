import styled from "styled-components";

export const InfoElement = styled.section`
  width: 105px;
`;

export const InfoWrap = styled.div`
  /* border-top: 1px dotted grey; */
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
