import React, { Fragment } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import * as queries from "../../../graphql/queries";
import { withRecord } from "../../hoc";
import NewbornList from "../../newborn/list/newbornList";
import TrainerList from "../../trainer/list/trainerList";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";

function UserHub({ currentUserId, onRecordOpen }) {
  const returnUserTrainers = () => {
    return (
      <Query
        query={gql(queries.getUserTrainers)}
        variables={{ id: currentUserId }}
        fetchPolicy="network-only"
      >
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }
          if (loading) {
            return <TrainerList loading={loading} />;
          }
          if (data.getUser) {
            return (
              <TrainerList
                currentUserId={currentUserId}
                trainers={data.getUser.trainers.items}
                loading={loading}
              />
            );
          }
          return null;
        }}
      </Query>
    );
  };

  const returnUserNewborns = () => {
    return (
      <Query
        query={gql(queries.getUserNewborns)}
        variables={{ id: currentUserId }}
      >
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorDialog open message={error.message} />;
          }
          if (loading) {
            return <NewbornList newborns={[]} isLoading={loading} />;
          }
          if (data.getUser) {
            return (
              <NewbornList
                newborns={data.getUser.newborns.items}
                loading={loading}
                onRecordOpen={onRecordOpen}
              />
            );
          }
          return null;
        }}
      </Query>
    );
  };

  if (currentUserId) {
    return (
      <Fragment>
        {returnUserTrainers()}
        {returnUserNewborns()}
      </Fragment>
    );
  }
  return null;
}

UserHub.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  onRecordOpen: PropTypes.func.isRequired
};

export default withRecord(withRouter(UserHub));
