import React, { Component } from 'react';
import Header from './header.js';
import { classes } from 'istanbul-lib-coverage';

export default function withHeader(WrapperHeaderComp) {
  return class withHeader extends Component {
    render() {
      return (
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <WrapperHeaderComp />
        </div>
      );
    }
  };
}
