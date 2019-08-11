import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import * as queries from "../../../graphql/queries";
import NewbornList from "../../newborn/list/newbornList";
import TrainerList from "../../trainer/list/trainerList";
import Text from "../../../components/atoms/text/text";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";

function UserHub({ currentUserId }) {
  const returnListTitle = title => (
    <Text size="large" weight="bold">
      {title}
    </Text>
  );

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
                title={returnListTitle("My Trainers")}
                currentUserId={currentUserId}
                items={data.getUser.trainers.items}
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
            return <NewbornList items={[]} isLoading={loading} />;
          }
          if (data.getUser) {
            return (
              <NewbornList
                title={returnListTitle("My Newborns")}
                items={data.getUser.newborns.items}
                loading={loading}
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
      <div>
        {returnUserTrainers()}
        {returnUserNewborns()}
      </div>
    );
  }
  return null;
}

export default UserHub;
