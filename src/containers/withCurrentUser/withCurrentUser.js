import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Auth } from "aws-amplify";

const GET_CURRENT_USER = gql`
  {
    currentUserId @client
  }
`;

export default function withCurrentUser(Component) {
  return () => {
    return (
      <Query query={GET_CURRENT_USER}>
        {({ data, client }) => {
          Auth.currentAuthenticatedUser().then(currentUser => {
            if (!data.currentUserId) {
              client.writeData({
                data: {
                  currentUserId: currentUser.attributes.sub
                }
              });
            }
          });
          return <Component currentUserId={data.currentUserId} />;
        }}
      </Query>
    );

    // return <Component currentUser={{}} />;
  };
}
