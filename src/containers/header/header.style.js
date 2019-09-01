import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const HeaderContainer = styled.section`
  position: fixed;
  background-color: white;
  border-bottom: 6px solid ${Theme.palette.dark.main};
  height: ${Theme.spacing.xxlarge};
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 7px;
  width: 99%;
  z-index: 9999;
  top: 0;
`;

export const NavigationWrapper = styled.section`
  display: flex;
  position: absolute;
  right: ${props => (props.right ? "0px" : null)};
  left: ${props => (props.left ? "0px" : null)};
`;

export const HeaderLogo = styled.img`
  height: ${Theme.spacing.xxlarge};
  width: ${Theme.spacing.xxlarge};
`;
