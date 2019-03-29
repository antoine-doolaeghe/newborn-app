import styled from 'styled-components';
import { media } from './media.style';

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: scroll;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columnNumber || 0}, 280px);
  grid-template-rows: 280px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const FlexContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const MainContainer = styled.div`
  margin: 20px;
`;
