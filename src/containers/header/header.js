import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router";
import {
  HeaderContainer,
  HeaderMenuIcon,
  HeaderProfileIcon,
  HeaderMenu,
  MenuItem
} from "./header.style";
import * as actions from "../../store/actions";

const Header = props => {
  const [menuNavOpen, setMenuNavOpen] = useState(false);
  const [menuProfileOpen, setProfileNavOpen] = useState(false);

  useEffect(() => {
    const { fetchSingleUser } = props;
    fetchSingleUser();
  }, [props]);

  const handleLogout = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const { currentUser } = props;
  const { username } = currentUser || {};

  const renderNavigationMenu = (
    <HeaderMenu
      open={menuNavOpen}
      onClose={() => {
        setMenuNavOpen(!menuNavOpen);
      }}
    >
      <MenuItem onClick={handleLogout}>{username}</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </HeaderMenu>
  );

  const renderProfileMenu = (
    <HeaderMenu
      open={menuProfileOpen}
      onClose={() => {
        setProfileNavOpen(!menuProfileOpen);
      }}
    >
      <MenuItem onClick={handleLogout}>{username}</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </HeaderMenu>
  );

  return (
    <HeaderContainer>
      <HeaderMenuIcon
        open={menuNavOpen}
        onClick={() => {
          setMenuNavOpen(!menuNavOpen);
        }}
      />
      <HeaderProfileIcon
        open={menuProfileOpen}
        onClick={() => {
          setProfileNavOpen(!menuProfileOpen);
        }}
      />
      {renderProfileMenu}
      {renderNavigationMenu}
    </HeaderContainer>
  );
};

Header.prototype = {};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Header)
);
