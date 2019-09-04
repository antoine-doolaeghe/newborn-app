import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import * as queries from "../../../graphql/queries";
import NewbornList from "../../newborn/list/newbornList";
import TrainerList from "../../trainer/list/trainerList";
import Text from "../../../components/atoms/text/text";

import { Button } from "../../../components/molecules/buttons";
import { ErrorDialog } from "../../../components/molecules/snackbars/errorSnackBar/style/error.style";

const CREATE_TRAINER = gql`
  mutation CreateTrainer($title: String!, $trainerOwnerId: ID!) {
    createTrainer(input: { title: $title, trainerOwnerId: $trainerOwnerId }) {
      title
    }
  }
`;

function UserHub({ history, currentUserId }) {
  const returnListTitle = title => (
    <div style={{ display: "flex" }}>
      <Text size="large" weight="bold">
        {title}
      </Text>
      <Mutation mutation={CREATE_TRAINER}>
        {(createTrainer, { data }) => {
          if (data && data.createTrainer) {
            history.push("./builder");
          }
          return <Button color="primary">Create new trainer</Button>;
        }}
      </Mutation>
      <Mutation mutation={CREATE_TRAINER}>
        {(createTrainer, { data }) => {
          if (data && data.createTrainer) {
            history.push("./builder");
          }
          return <Button color="secondary">Browse trainer</Button>;
        }}
      </Mutation>
    </div>
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
                title={returnListTitle("My Newborns")}
                newborns={data.getUser.newborns.items}
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

UserHub.propTypes = {
  currentUserId: PropTypes.string.isRequired
};

export default withRouter(UserHub);
