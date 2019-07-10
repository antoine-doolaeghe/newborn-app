import React from "react";
import styled from "styled-components";
import { Grid } from "../../../theme/layout/grid.style";
import { colors } from "../../../theme/theme";

export const CardListWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.dark.dark};
`;
export const CardListGrid = styled(Grid)`
  padding-bottom: 20px;
`;

export const ListTitle = styled.p`
  position: absolute;
  bottom: 15px;
  left: 30px;
  margin: 0;
`;

function CardList({ list, listTitle, id }) {
  return (
    <CardListWrapper>
      <CardListGrid columnNumber={list.length} data-testid={id} rowNumber={1}>
        {list}
      </CardListGrid>
      <ListTitle>{listTitle}</ListTitle>
    </CardListWrapper>
  );
}

export default CardList;
