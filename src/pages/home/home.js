import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import withCurrentUser from "../../containers/withCurrentUser/withCurrentUser";
import withHeader from "../../containers/header/withHeader";
import UserHub from "../../containers/user/hub/userHub";

function Home({ currentUserId }) {
  return <UserHub currentUserId={currentUserId} />;
}

export default withAuthenticator(withCurrentUser(withHeader(Home)));
