import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const HeaderContainer = styled.section`
  align-items: center;
  background-color: white;
  border-bottom: 6px solid ${Theme.palette.dark.main};
  display: flex;
  height: ${Theme.spacing.xxlarge};
  justify-content: center;
  padding: ${Theme.spacing.standard};
  position: fixed;
  text-align: center;
  top: 0;
  width: calc(100% - 20px);
  z-index: ${Theme.zIndex.high};
`;

export const HeaderSpacer = styled.div`
  position: relative;
  height: 75px;
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
