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
import { Text } from "../../components/atoms/text";
import withCurrentUser from "../../containers/hoc/withCurrentUser";

export const Builder = ({ match, currentUserNewborns }) => {
  return (
    <Query
      query={gql(queries.getTrainer)}
      variables={{
        id: match.params.id
      }}
    >
      {({ loading, data }) => {
        if (loading || !data) {
          return <Text>loading</Text>;
        }
        const {
          getTrainer: { title, id, newborns }
        } = data;
        return (
          <Fragment>
            <BuilderHeader title={title} />
            <div style={{ display: "flex" }}>
              <BuilderForm
                trainerId={id}
                trainerNewborns={newborns}
                userNewborns={currentUserNewborns}
              />
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

export default withRouter(withHeader(withCurrentUser(Builder)));
