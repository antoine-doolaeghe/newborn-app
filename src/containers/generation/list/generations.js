import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import * as queries from "../../../graphql/queries";
import GenerationListLoader from "./loader/generationListLoader";
import NewbornList from "../../newborn/list/newbornList";
import { withRecord } from "../../hoc";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import GenerationSearch from "./search/generationsSearch";

const limit = 1000;

function GenerationList({ onRecordOpen }) {
  let newbornCount = 0;
  const returnNewbornGeneration = () => {
    return (
      <Query query={gql(queries.listGenerations)} variables={{ limit }}>
        {({ data, loading, error }) => {
          if (error) return <ErrorDialog open message={error.message} />;

          if (loading)
            return (
              <Fragment>
                <GenerationSearch disabled newbornCount={newbornCount} />
                <GenerationListLoader />
              </Fragment>
            );

          const newbornLists = data.listGenerations.items.map(
            (generation, index) => {
              newbornCount += generation.newborns.items.length;
              return (
                <NewbornList
                  index={index + 1}
                  newborns={generation.newborns.items}
                  onRecordOpen={onRecordOpen}
                />
              );
            }
          );

          return (
            <Fragment>
              <GenerationSearch newbornCount={newbornCount} />
              {newbornLists}
            </Fragment>
          );
        }}
      </Query>
    );
  };

  return returnNewbornGeneration();
}

GenerationList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  onRecordOpen: PropTypes.func.isRequired
};

export default withRecord(GenerationList);
