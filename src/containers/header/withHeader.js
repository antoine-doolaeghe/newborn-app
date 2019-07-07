import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./header.js";

export default function withHeader(WrapperHeaderComp) {
  class withHeader extends Component {
    render() {
      return (
        <div style={{ width: "100%" }}>
          <Header />
          <WrapperHeaderComp />
        </div>
      );
    }
  }
  return withRouter(withHeader);
}
