import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import NewbornChildsLoader from "./loader/newbornChildsLoader";
import AvatarGroup from "../../../components/molecules/avatarGroup/avatarGroup";
import { returnTextAbstract } from "../../../utils/helpers/newbornGlobalHelpers";

const NewbornParents = ({ childs, loading }) => {
  if (loading) {
    return <NewbornChildsLoader />;
  }
  const returnfilter = () => {
    const filter = [];
    childs.forEach(parent => {
      filter.push({ id: { eq: parent } });
    });
    return filter;
  };

  if (childs.length === 0) {
    return "no child";
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
          return <NewbornChildsLoader />;
        }

        data.listNewborns.items.forEach(child => {
          childs.push(returnTextAbstract(child.name, 4));
        });

        return <AvatarGroup avatars={childs} />;
      }}
    </Query>
  );
};

export default NewbornParents;
