import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as queries from "../../graphql/queries";
import BuilderForm from "../../containers/builder/form/builderForm";
import BuilderHeader from "../../containers/builder/header/builderHeader";
import BuilderGame from "../../containers/builder/game/builderGame";
import withHeader from "../../containers/hoc/withHeader";

export const Builder = ({ match }) => {
  return (
    <Query
      query={gql(queries.getTrainer)}
      variables={{
        id: match.params.id
      }}
    >
      {({ loading, data }) => {
        if (loading || !data) {
          return "loading";
        }
        const {
          getTrainer: { title, id }
        } = data;
        return (
          <Fragment>
            <BuilderHeader title={title} />
            <div style={{ width: "100%", height: "100%", display: "flex" }}>
              <BuilderForm trainerId={id} />
              <BuilderGame />
            </div>
          </Fragment>
        );
      }}
    </Query>
  );
};

Builder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(withHeader(Builder));
