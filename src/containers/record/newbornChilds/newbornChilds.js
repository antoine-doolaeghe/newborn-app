import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import Chip from "../../../components/atoms/chips/chip";
import AvatarGroup from "../../../components/molecules/avatarGroup/avatarGroup";

const NewbornParents = ({ childs, loading }) => {
  if (loading) {
    return "loading";
  }
  const returnfilter = () => {
    const filter = [];
    childs.forEach(parent => {
      filter.push({ id: { eq: parent } });
    });
    return filter;
  };

  if (returnfilter().length === 0) {
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
          return "";
        }

        data.listNewborns.items.forEach(parent => {
          childs.push(parent.name);
        });

        return <AvatarGroup avatars={childs} />;
      }}
    </Query>
  );
};

export default NewbornParents;
