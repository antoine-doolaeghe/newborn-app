import styled from "styled-components";

export const CardWrapper = styled.section`
  border: ${props => (props.color ? `2px solid ${props.color.main}` : null)};
  background: ${props => (props.color ? props.color.light : null)};
  border-radius: 8px 8px 0px 0px;
  height: 220px;
  margin-left: 30px;
  position: relative;
  width: 220px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.13);
  &:hover {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.29), 0 10px 10px rgba(0, 0, 0, 0.23);
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
