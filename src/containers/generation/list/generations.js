import React, { useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import * as queries from "../../../graphql/queries";
import GenerationListLoader from "./loader/generationListLoader";
import NewbornList from "../../newborn/list/newbornList";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";

import NewbornRecord from "../../record/newbornRecord";

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
      <Query query={gql(queries.listGenerations)}>
        {({ data, loading, error }) => {
          if (error) return <ErrorDialog open message={error.message} />;

          if (loading) return <GenerationListLoader />;

          return data.listGenerations.items.map(generation => {
            return (
              <div>
                <NewbornRecord
                  id={id}
                  open={isRecordOpen}
                  onClose={onRecordClose}
                />
                <NewbornList
                  title={generation.id}
                  items={generation.newborns.items}
                  onRecordOpen={onRecordOpen}
                />
              </div>
            );
          });
        }}
      </Query>
    );
  };
  return returnNewbornGeneration();
}

export default GenerationList;