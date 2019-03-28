import styled from 'styled-components';
import { media } from './media.style';

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 270px 270px 270px;
  grid-template-rows: repeat(3, 280px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${media.desktop`grid-template-columns: 270px 270px; grid-template-rows: repeat(4, 280px);`}
  ${media.tablet`grid-template-columns: 270px; grid-template-rows: repeat(5, 280px);`}
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
