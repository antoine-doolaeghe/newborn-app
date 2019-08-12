import React, { useEffect, useState } from "react";
import BuilderForm from "./builderForm/builderForm";
import BuilderHeader from "./builderHeader/builderHeader";
import BuilderGame from "./builderGame/builderGame";
import withHeader from "../../containers/header/withHeader";

export const Builder = () => {
  return (
    <div>
      <BuilderHeader />
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <BuilderForm />
        <BuilderGame />
      </div>
    </div>
  );
};

export default withHeader(Builder);
