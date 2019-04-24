import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: relative;
  border-bottom: 6px solid;
  height: 55px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

export const HeaderMenuIcon = styled.div`
  border-right: 1px solid black;
  width: 55px;
  height: 100%;
  background: ${props => (props.open ? "black" : "none")};
  &:hover {
    background: ${props => (props.open ? "black" : "lightgray")};
    cursor: pointer;
  }
`;

export const HeaderProfileIcon = styled.div`
  border-left: 1px solid black;
  width: 55px;
  height: 100%;
  background: ${props => (props.open ? "black" : "none")};
  &:hover {
    background: ${props => (props.open ? "black" : "lightgray")};
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div`
  border-right: 1px solid black;
  width: 150px;
  background: black;
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  top: 55px;
`;

export const MenuItem = styled.div`
  border-right: 1px solid black;
  width: 55px;
  height: 100%;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

export const HeaderItem = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  background: none;
  border: none;
  &:hover {
    background: lightgray;
  }
`;
