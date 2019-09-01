import React, { Fragment, useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import * as queries from "../../../graphql/queries";
import GenerationListLoader from "./loader/generationListLoader";
import NewbornList from "../../newborn/list/newbornList";
import NewbornRecord from "../../record/newbornRecord";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import GenerationSearch from "./search/generationsSearch";

const limit = 1000;

function GenerationList() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [id, setId] = useState("");
  const onRecordClose = () => setIsRecordOpen(false);
  const onRecordOpen = event => {
    setId(event.target.closest("section").dataset.newbornid);
    setIsRecordOpen(true);
  };
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

  return (
    <Fragment>
      <NewbornRecord
        setId={setId}
        id={id}
        open={isRecordOpen}
        onClose={onRecordClose}
      />
      {returnNewbornGeneration()}
    </Fragment>
  );
}

export default GenerationList;
