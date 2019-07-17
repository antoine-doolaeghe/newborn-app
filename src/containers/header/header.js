import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import Styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import withCurrentUser from "../withCurrentUser/withCurrentUser";
import { HeaderContainer } from "./header.style";
import NavigationButton from "./navigationButton";
import ProfileButton from "./profileButton/profileButton";
import SearchInput from "../../components/molecules/inputs/iconButtonInput/iconButtonInput";

const NavigationWrapper = Styled.section`
  display: flex;
  position: absolute;
  right: ${props => (props.right ? "0px" : null)};
  left: ${props => (props.left ? "0px" : null)};
`;

const HeaderLogo = Styled.img`
  height: 55px;
  width: 55px;
`;

const Header = ({ location }) => {
  const redirect = location.pathname === "/" ? "catalogue" : "/";
  const returnLeftHandSideNavigation = () => {
    return (
      <NavigationWrapper left>
        <Link style={{ textDecoration: "none" }} to={redirect}>
          <NavigationButton redirect={redirect} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/live">
          <NavigationButton redirect="live" />
        </Link>
      </NavigationWrapper>
    );
  };

  const returnRightHandSideNavigation = () => {
    return (
      <NavigationWrapper right>
        <SearchInput />
        <ProfileButton color="primary" />
      </NavigationWrapper>
    );
  };

  const returnNewbornLogo = () => {
    return <HeaderLogo src="/images/newborn-logo.png" />;
  };

  return (
    <HeaderContainer>
      {returnLeftHandSideNavigation()}
      {returnNewbornLogo()}
      {returnRightHandSideNavigation()}
    </HeaderContainer>
  );
};

Header.defaultProps = {
  currentUser: ""
};

export default withCurrentUser(withRouter(Header));
