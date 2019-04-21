import styled from "styled-components";

export const GridContainer = styled.div`
  align-items: ${props => props.align || "center"};
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columnNumber || 0}, 280px);
  grid-column-gap: 0px;
  grid-template-rows: repeat(${props => props.rowNumber || 0}, 280px);
  overflow-x: scroll;
`;

export const Container = styled.div`
  height: ${props => props.height || null};
  width: ${props => props.width || null};
`;

export const FlexContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  margin: ${props => props.margin || null};
  flex-direction: ${props => props.direction || null};
  flex: ${props => props.flex || null};
  height: ${props => props.height || "100%"};
  justify-content: center;
  align-items: ${props => props.align || null};
`;

export const MainContainer = styled.div`
  margin: 20px;
`;
