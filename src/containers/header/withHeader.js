import React from "react";
import withCurrentUser from "../withCurrentUser/withCurrentUser";
import Header from "./header";

export default function withHeader(WrapperHeaderComp) {
  const headerHoc = props => {
    return (
      <div style={{ width: "100%" }}>
        <Header {...props} />
        <WrapperHeaderComp />
      </div>
    );
  };

  return withCurrentUser(headerHoc);
}
