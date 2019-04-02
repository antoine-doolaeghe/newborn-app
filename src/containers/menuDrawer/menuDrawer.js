import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { history } from '../../store/store';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import ListIcon from '@material-ui/icons/ViewList';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import ChildIcon from '@material-ui/icons/ChildFriendly';
import LiveIcon from '@material-ui/icons/LiveTv';
import SchoolIcon from '@material-ui/icons/School';

import menuDrawerJss from './menuDrawer_jss';

const ROUTE_CONFIG = [
  {
    name: 'Born list',
    path: '/',
    selectedId: 1,
    icon: <ListIcon />,
  },
  {
    name: 'My born',
    path: '/my-born',
    selectedId: 2,
    icon: <ChildIcon />,
  },
  {
    name: 'Academy',
    path: '/academy',
    selectedId: 3,
    icon: <SchoolIcon />,
  },
  {
    name: 'Live',
    path: '/live',
    selectedId: 4,
    icon: <LiveIcon />,
  },
];

class MenuDrawer extends React.Component {
  static handleListItemClick(path) {
    history.push(path);
  }

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: localStorage.openDrawer,
    };
  }

  handleDrawerState() {
    const { openDrawer } = this.state;
    this.setState(
      {
        openDrawer: !openDrawer,
      },
      () => {
        localStorage.openDrawer = !JSON.parse(openDrawer);
      },
    );
  }

  renderDrawerListItem() {
    const { classes, selectedItem, openDrawer } = this.props;
    const drawerListItems = [];
    ROUTE_CONFIG.forEach(item => {
      drawerListItems.push(
        <Tooltip placement="right" title={item.name} classes={{ popper: classes[openDrawer ? 'hideElement' : 'showElement'] }}>
          <ListItem
            selected={selectedItem === item.selectedId}
            button
            key={item.name}
            onClick={() => {
              MenuDrawer.handleListItemClick(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Tooltip>,
      );
    });
    return drawerListItems;
  }

  render() {
    const { classes } = this.props;
    const { openDrawer } = this.state;

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
        open={openDrawer}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={() => {
              this.handleDrawerState();
            }}
          >
            <img src="/images/newBorn-logo.png" alt="newborn-logo" height="30" width="30" />
          </IconButton>
        </div>
        <Divider />
        <List>{this.renderDrawerListItem()}</List>
      </Drawer>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(menuDrawerJss, { withTheme: true })(MenuDrawer);
