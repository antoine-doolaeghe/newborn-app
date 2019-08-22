import React, { Fragment } from "react";
import BuilderForm from "../../containers/builder/form/builderForm";
import BuilderHeader from "../../containers/builder/header/builderHeader";
import BuilderGame from "../../containers/builder/game/builderGame";
import withHeader from "../../containers/hoc/withHeader";

export const Builder = () => {
  return (
    <Fragment>
      <BuilderHeader />
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <BuilderForm />
        <BuilderGame />
      </div>
    </Fragment>
  );
};

export default withHeader(Builder);
