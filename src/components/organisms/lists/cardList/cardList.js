import React from "react";
import styled from "styled-components";
import { Grid } from "../../../../theme/layout/grid.style";
import { Theme } from "../../../../theme/theme";

export const CardListWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${Theme.palette.dark.dark};
`;
export const CardListGrid = styled(Grid)`
  padding-bottom: 20px;
`;
export const ListTitle = styled.p`
  margin: 25px;
`;

function CardList({ list, listTitle, id }) {
  return (
    <CardListWrapper>
      <ListTitle>{listTitle}</ListTitle>
      <CardListGrid columnNumber={list.length} data-testid={id} rowNumber={1}>
        {list}
      </CardListGrid>
    </CardListWrapper>
  );
}

export default CardList;
