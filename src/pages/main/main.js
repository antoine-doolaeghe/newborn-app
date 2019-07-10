import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";

import GenerationList from "../../containers/generations/generationList/generationList";

function Main() {
  return <GenerationList />;
}

export default withAuthenticator(withHeader(Main));
