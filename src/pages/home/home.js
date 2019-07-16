import React, { useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import withCurrentUser from "../../containers/withCurrentUser/withCurrentUser";
import withHeader from "../../containers/header/withHeader";
import Text from "../../components/atoms/text/text";
import * as queries from "../../graphql/queries";

function Home() {
  return (
    <div>
      <Query query={gql(queries.getUser)} variables={{ id: "userId" }}>
        {({ data, loading, error }) => {
          return null;
        }}
      </Query>
      <Text size="large" weight="bold">
        My Trainers
      </Text>
    </div>
  );
}

export default withAuthenticator(withHeader(Home));
