import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import BuilderForm from "../../containers/builder/form/builderForm";
import BuilderHeader from "../../containers/builder/header/builderHeader";
import BuilderGame from "../../containers/builder/game/builderGame";
import withHeader from "../../containers/hoc/withHeader";
import withCurrentUser from "../../containers/hoc/withCurrentUser";

export const Builder = ({ match }) => {
  return (
    <Fragment>
      <BuilderHeader trainerId={match.params.id} />
      <BuilderForm trainerId={match.params.id} />
      <BuilderGame />
    </Fragment>
  );
};

Builder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired
  }).isRequired
};

export default withHeader(withCurrentUser(withRouter(Builder)));
