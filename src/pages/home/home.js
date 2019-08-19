import React from "react";
import PropTypes from "prop-types";
import { withAuthenticator } from "aws-amplify-react";
import { withCurrentUser } from "../../containers/hoc";
import withHeader from "../../containers/header/withHeader";
import UserHub from "../../containers/user/hub/userHub";

function Home({ currentUserId }) {
  return <UserHub currentUserId={currentUserId} />;
}

Home.propTypes = {
  currentUserId: PropTypes.string.isRequired
};

export default withAuthenticator(withCurrentUser(withHeader(Home)));
