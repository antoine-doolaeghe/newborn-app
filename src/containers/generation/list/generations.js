import React, { Fragment, useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import * as queries from "../../../graphql/queries";
import GenerationListLoader from "./loader/generationListLoader";
import NewbornList from "../../newborn/list/newbornList";
import NewbornRecord from "../../record/newbornRecord";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";
import GenerationSearch from "./search/generationsSearch";

function GenerationList() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [id, setId] = useState("");
  const onRecordClose = () => setIsRecordOpen(false);
  const onRecordOpen = event => {
    setId(event.target.closest("section").dataset.newbornid);
    setIsRecordOpen(true);
  };
  const returnNewbornGeneration = () => {
    return (
      <Query query={gql(queries.listGenerations)} variables={{ limit: 1000 }}>
        {({ data, loading, error }) => {
          if (error) return <ErrorDialog open message={error.message} />;

          if (loading) return <GenerationListLoader />;

          return data.listGenerations.items.map((generation, index) => {
            return (
              <NewbornList
                index={index + 1}
                newborns={generation.newborns.items}
                onRecordOpen={onRecordOpen}
              />
            );
          });
        }}
      </Query>
    );
  };

  return (
    <Fragment>
      <h1>Newborn List</h1>
      <GenerationSearch />
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
