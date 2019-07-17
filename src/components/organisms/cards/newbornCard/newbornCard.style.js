import styled from "styled-components";

export const CardWrapper = styled.section`
  border: ${props => (props.color ? `2px solid ${props.color.main}` : null)};
  background: ${props => (props.color ? props.color.light : null)};
  border-radius: 5px;
  height: 220px;
  position: relative;
  width: 220px;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    border: ${props => (props.color ? `2px solid ${props.color.dark}` : null)};
    cursor: pointer;
  }
`;

export const CardButtonWrapper = styled.div`
  bottom: 0px;
  padding: 7px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  right: 0px;
`;

export const CardChartWrapper = styled.div``;
