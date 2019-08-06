import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import * as queries from "../../../graphql/queries";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import Chip from "../../../components/atoms/chips/chip";

const NewbornChilds = ({ parents, loading }) => {
  if (loading) {
    return "loading";
  }
  const returnfilter = () => {
    const filter = [];
    parents.forEach(parent => {
      filter.push({ id: { eq: parent } });
    });
    return filter;
  };

  if (returnfilter().length === 0) {
    return "no parent";
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
          return "";
        }

        data.listNewborns.items.forEach(parent => {
          parents.push(
            <Chip
              variant="outlined"
              label={parent.name}
              onClick={() => {
                console.log("HERE");
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
