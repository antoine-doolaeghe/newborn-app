import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import NewbornPartnersLoader from "./loader/newbornPartnersLoader";
import AvatarGroup from "../../../components/molecules/avatarGroup/avatarGroup";

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
    return "No Partners";
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

export default NewbornPartners;
