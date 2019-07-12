import React, { useState } from "react";
import Styled from "styled-components";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { HeaderContainer } from "./header.style";
import NavigationButton from "./navigationButton";
import ProfileButton from "./profileButton/profileButton";
import SearchInput from "../../components/molecules/inputs/searchInput/searchInput";

const NavigationWrapper = Styled.section`
  display: flex;
  position: absolute;
  right: ${props => (props.right ? "0px" : null)};
  left: ${props => (props.left ? "0px" : null)};
`;

const Header = props => {
  const [menuNavOpen, setMenuNavOpen] = useState(false);
  const [menuProfileOpen, setProfileNavOpen] = useState(false);
  const handleLogout = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const returnLeftHandSideNavigation = () => {
    return (
      <NavigationWrapper left>
        <NavigationButton navigation="Home" />
        <NavigationButton navigation="Live" />
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

  return (
    <HeaderContainer>
      {returnLeftHandSideNavigation()}
      <img src="/images/newborn-logo.png" style={{ height: 55, width: 55 }} />
      {returnRightHandSideNavigation()}
    </HeaderContainer>
  );
};

Header.defaultProps = {
  currentUser: ""
};

export default withRouter(Header);
