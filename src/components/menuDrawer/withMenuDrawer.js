import React, { Component } from 'react';
import MenuDrawer from './menuDrawer.js';

export default function withMenuDrawer(WrappedMenuComp, selectedItem) {
  return class withMenuDrawer extends Component {
    render() {
      return (
        <React.Fragment>
          <MenuDrawer selectedItem={selectedItem} />
          <WrappedMenuComp />
        </React.Fragment>
      );
    }
  };
}
