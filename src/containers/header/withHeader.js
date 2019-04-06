import React, { Component } from "react";
import Header from "./header.js";

export default function withHeader(WrapperHeaderComp) {
  return class withHeader extends Component {
    render() {
      return (
        <div style={{ overflow: "hidden", width: "100%" }}>
          <Header />
          <WrapperHeaderComp />
        </div>
      );
    }
  };
}
