import React, { Component } from "react";
import { withRouter } from "react-router";
import Header from "./header.js";

export default function withHeader(WrapperHeaderComp) {
  class withHeader extends Component {
    render() {
      return (
        <div style={{ overflow: "hidden", width: "100%" }}>
          <Header />
          <WrapperHeaderComp />
        </div>
      );
    }
  }
  return withRouter(withHeader);
}
