import React from "react";
import Header from "../header";

export default function withHeader(WrapperHeaderComp) {
  const headerHoc = props => {
    return (
      <div style={{ width: "100%" }}>
        <Header {...props} />
        <WrapperHeaderComp {...props} />
      </div>
    );
  };

  return headerHoc;
}
