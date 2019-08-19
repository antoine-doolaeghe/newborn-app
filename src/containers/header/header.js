import React from "react";
import PropTypes from "prop-types";
import { withAuthenticator } from "aws-amplify-react";
import { withApollo } from "react-apollo";
import { Auth } from "aws-amplify";
import { withRouter, Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withCurrentUser } from "../hoc";
import NavigationButton from "./navigationButton";
import ProfileButton from "./profileButton";
import SearchInput from "../../components/molecules/inputs/iconButtonInput/iconButtonInput";
import { HeaderContainer, NavigationWrapper, HeaderLogo } from "./header.style";

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
  currentUserName: ""
};

Header.propTypes = {
  client: PropTypes.shape({
    cache: PropTypes.shape({
      reset: PropTypes.func.isRequired
    })
  }).isRequired,
  currentUserName: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withAuthenticator(
  withCurrentUser(withApollo(withRouter(Header)))
);
