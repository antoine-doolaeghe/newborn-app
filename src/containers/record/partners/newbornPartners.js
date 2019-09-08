import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import NewbornPartnersLoader from "./loader/newbornPartnersLoader";
import AvatarGroup from "../../../components/molecules/avatarGroup/avatarGroup";
import { Text } from "../../../components/atoms/text";

const NewbornPartners = ({ setId, partners, loading }) => {
  if (loading) {
    return <NewbornPartnersLoader />;
  }
  const returnfilter = () => {
    return partners.map(parent => {
      return { id: { eq: parent } };
    });
  };

  if (partners.length === 0) {
    return <Text>No Partners</Text>;
  }

  return (
    <Query
      query={gql(queries.listNewbornChilds)}
      variables={{
        filter: {
          or: returnfilter()
        },
        limit: 1000
      }}
    >
      {({ data, loading, error }) => {
        const childs = [];
        if (error) {
          return <ErrorDialog open message={error.message} />;
        }

        if (loading) {
          return <NewbornPartnersLoader />;
        }

        data.listNewborns.items.forEach(child => {
          childs.push(child.id);
        });

        return <AvatarGroup setId={setId} avatars={childs} />;
      }}
    </Query>
  );
};

NewbornPartners.propTypes = {
  setId: PropTypes.func.isRequired,
  partners: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default NewbornPartners;
