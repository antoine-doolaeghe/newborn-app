import React from "react";
import PropTypes from "prop-types";
import { withCurrentUser } from "../../containers/hoc";
import withHeader from "../../containers/hoc/withHeader";
import UserHub from "../../containers/user/hub/userHub";

function Home({ currentUserId }) {
  return <UserHub currentUserId={currentUserId} />;
}

Home.propTypes = {
  currentUserId: PropTypes.string.isRequired
};

export default withCurrentUser(withHeader(Home));
