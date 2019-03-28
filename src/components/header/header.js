import * as actions from '../../store/actions';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import connect from 'react-redux/es/connect/connect';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './header_jss';
import { withStyles } from '@material-ui/core/styles';

import { Auth } from 'aws-amplify';

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {
    const { fetchSingleUser } = this.props;
    fetchSingleUser();
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () =>
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const { currentUser } = this.props;
    const { username } = currentUser || {};

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>{username}</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar style={{ marginLeft: localStorage.openDrawer ? 241 : 74 }}>
            <IconButton className={classes.menuIcon} aria-haspopup="true" onClick={this.handleMenu} color="primary">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
});

export default connect(
  mapStateToProps,
  actions,
)(withStyles(styles)(Header));
