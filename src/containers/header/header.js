import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import {
  HeaderContainer,
  HeaderMenuIcon,
  HeaderProfileIcon,
  HeaderMenu,
  MenuItem
} from "./header.style";

const Header = props => {
  const [menuNavOpen, setMenuNavOpen] = useState(false);
  const [menuProfileOpen, setProfileNavOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default withRouter(Header);
