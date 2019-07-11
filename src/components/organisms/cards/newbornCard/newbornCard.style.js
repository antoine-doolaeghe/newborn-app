import styled from "styled-components";

export const CardWrapper = styled.section`
  border: ${props => `2px solid ${props.color.dark}`};
  background: ${props => props.color.light};
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

export const CardButtonWrapper = styled.div`
  bottom: 0px;
  padding: 7px;
  position: absolute;
  right: 0px;
`;

export const CardChartWrapper = styled.div``;
