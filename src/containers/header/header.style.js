import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: relative;
  border-bottom: 6px solid;
  height: 55px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 7px;
`;

export const HeaderMenuIcon = styled.div`
  width: 55px;
  border-radius: 5px;
  height: 100%;
  background: ${props => (props.open ? "black" : "lightgray")};
  &:hover {
    background: ${props => (props.open ? "black" : "gray")};
    cursor: pointer;
  }
`;

export const HeaderProfileIcon = styled.div`
  width: 55px;
  height: 100%;
  border-radius: 50px;
  background: ${props => (props.open ? "black" : "lightgray")};
  &:hover {
    background: ${props => (props.open ? "black" : "gray")};
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div`
  border-right: 1px solid black;
  width: 150px;
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  top: 55px;
`;

export const MenuItem = styled.div`
  border-right: 1px solid black;
  background: "white";
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
