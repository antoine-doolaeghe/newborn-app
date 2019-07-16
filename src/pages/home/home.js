import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import withCurrentUser from "../../containers/withCurrentUser/withCurrentUser";
import NewbornList from "../../containers/newborns/newbornList/newbornList";
import TrainerList from "../../containers/trainers/trainerList/trainerList";
import withHeader from "../../containers/header/withHeader";
import Text from "../../components/atoms/text/text";
import * as queries from "../../graphql/queries";

function Home(props) {
  const returnListTitle = () => (
    <Text size="large" weight="bold">
      My Newborns
    </Text>
  );
  if (props.currentUserId) {
    return (
      <div>
        <Query
          query={gql(queries.getUserNewborns)}
          variables={{ id: props.currentUserId }}
        >
          {({ data, loading, error }) => {
            if (data.getUser) {
              const currentUser = data.getUser;
              return (
                <NewbornList
                  title={returnListTitle()}
                  items={data.getUser.newborns.items}
                />
              );
            }
            return null;
          }}
        </Query>
        <Text size="large" weight="bold">
          My Trainers
        </Text>
        <Query
          query={gql(queries.getUserTrainers)}
          variables={{ id: props.currentUserId }}
        >
          {({ data, loading, error }) => {
            if (data.getUser) {
              const currentUser = data.getUser;
              return <TrainerList items={data.getUser.trainers.items} />;
            }
            return null;
          }}
        </Query>
      </div>
    );
  }
  return null;
}

export default withAuthenticator(withCurrentUser(withHeader(Home)));
