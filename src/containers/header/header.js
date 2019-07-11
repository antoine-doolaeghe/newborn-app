import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import {
  HeaderContainer,
  HeaderMenuIcon,
  HeaderProfileIcon,
  HeaderMenu,
  MenuItem
} from "./header.style";

import Drawer from "../../components/organisms/drawer/drawer";

const Header = props => {
  const [menuNavOpen, setMenuNavOpen] = useState(false);
  const [menuProfileOpen, setProfileNavOpen] = useState(false);
  const handleLogout = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const { currentUser } = props;
  const renderNavigationMenu = (
    <HeaderMenu
      open={menuNavOpen}
      onClose={() => {
        setMenuNavOpen(!menuNavOpen);
      }}
    >
      <MenuItem onClick={handleLogout}>{currentUser}</MenuItem>
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
      <MenuItem onClick={handleLogout}>{currentUser}</MenuItem>
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
      <Drawer open={menuNavOpen} />
    </HeaderContainer>
  );
};

Header.defaultProps = {
  currentUser: ""
};

export default withRouter(Header);
