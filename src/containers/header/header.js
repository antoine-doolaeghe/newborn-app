import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import { withApollo } from "react-apollo";
import { Auth } from "aws-amplify";
import Styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
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

const Header = ({ client, location, currentUserName }) => {
  const redirect = location.pathname === "/" ? "catalogue" : "/";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    client.cache.reset();
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick() {
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function returnProfileName() {
    if (currentUserName) {
      return currentUserName[0];
    }
    return "";
  }

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
        <ProfileButton
          profileName={returnProfileName()}
          onClick={handleClickListItem}
        />
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick()}>Profile</MenuItem>
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu>
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

export default withAuthenticator(
  withCurrentUser(withApollo(withRouter(Header)))
);
