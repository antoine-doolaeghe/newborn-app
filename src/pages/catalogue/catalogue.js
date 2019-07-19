import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";
import GenerationList from "../../containers/generation/list/generations";

function Catalogue() {
  return <GenerationList />;
}

export default withAuthenticator(withHeader(Catalogue));
