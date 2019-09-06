import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";

import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import NewbornParentsLoader from "./loader/newbornParentsLoader";
import Chip from "../../../components/atoms/chips/chip";
import { returnTextAbstract } from "../../../utils/helpers/globalHelpers";

const NewbornChilds = ({ setId, parents, loading }) => {
  const returnfilter = () => {
    const filter = [];
    parents.forEach(parent => {
      filter.push({ id: { eq: parent } });
    });
    return filter;
  };

  if (loading) {
    return <NewbornParentsLoader />;
  }

  if (parents.length === 0) {
    return "No Parent";
  }

  return (
    <Query
      query={gql(queries.listNewbornParents)}
      variables={{
        filter: {
          or: returnfilter()
        },
        limit: 1000
      }}
    >
      {({ data, loading, error }) => {
        const parents = [];
        if (error) {
          return <ErrorDialog open message={error.message} />;
        }

        if (loading) {
          return <NewbornParentsLoader />;
        }

        data.listNewborns.items.forEach(parent => {
          parents.push(
            <Chip
              variant="outlined"
              label={returnTextAbstract(parent.name, 10)}
              onClick={() => {
                setId(parent.id);
              }}
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
            />
          );
        });

        return parents;
      }}
    </Query>
  );
};

export default NewbornChilds;
