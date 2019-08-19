import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const HeaderContainer = styled.section`
  position: relative;
  border-bottom: 6px solid ${Theme.palette.dark.main};
  height: ${Theme.spacing.xxlarge};
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 7px;
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
