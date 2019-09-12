import styled from "styled-components";
import { Theme } from "../../../../../theme/theme";

const { spacing } = Theme;

const cardSize = "220px";

export const CardWrapper = styled.section(props => {
  const { color } = props;
  const { spacing } = Theme;
  return `
  border: ${color ? `2px solid ${color.main}` : null};
  background: ${color ? color.light : null};
  border-radius: ${spacing.medium} ${spacing.medium} 0px 0px;
  height: 220px;
  margin-left: 30px;
  position: relative;
  width: ${props.size === "small" ? `100px` : cardSize};
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.13);
  &:hover {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.29), 0 10px 10px rgba(0, 0, 0, 0.23);
    border: ${color ? `2px solid ${props.color.dark}` : null};
    cursor: pointer;
  }
`;
});

export const CardButtonWrapper = styled.div`
  bottom: 0px;
  padding: ${spacing.small};
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  right: 0px;
`;

export const CardChartWrapper = styled.div``;

export const EmptyDataPlaceHolder = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  height: calc(100% - 100px);
  justify-content: center;
  width: 100%;
`;
