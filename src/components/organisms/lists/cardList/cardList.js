import React from "react";
import styled from "styled-components";
import { Grid } from "../../../../theme/layout/grid.style";
import { Theme } from "../../../../theme/theme";

export const CardListWrapper = styled.div`
  position: relative;
  border-bottom: 25px solid white;
  border-top: 2px solid ${Theme.palette.dark.light};
`;
export const CardListGrid = styled(Grid)`
  align-items: center;
  padding-bottom: 20px;
`;
export const ListTitle = styled.p`
  margin: 25px;
`;

function CardList({ list, title, id }) {
  return (
    <CardListWrapper>
      <ListTitle>{title}</ListTitle>
      <CardListGrid columnNumber={list.length} data-testid={id} rowNumber={1}>
        {list}
      </CardListGrid>
    </CardListWrapper>
  );
}

export default CardList;
