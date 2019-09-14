import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import BuilderForm from "../../containers/builder/form/builderForm";
import BuilderHeader from "../../containers/builder/header/builderHeader";
import BuilderGame from "../../containers/builder/game/builderGame";
import withHeader from "../../containers/hoc/withHeader";
import withCurrentUser from "../../containers/hoc/withCurrentUser";

interface IBuilderProps {
  match: {
    params: {
      id: string;
    };
  };
}

export const Builder = ({ match }: IBuilderProps) => {
  const { id } = match.params;
  return (
    <Fragment>
      <BuilderHeader trainerId={id} />
      <BuilderForm trainerId={id} />
      <BuilderGame />
    </Fragment>
  );
};

export default withHeader(withCurrentUser(withRouter(Builder)));
