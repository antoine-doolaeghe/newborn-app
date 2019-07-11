import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";

import GenerationList from "../../containers/generations/generationList/generationList";

function Trainer() {
  window.UnityLoader.instantiate("gameContainer", "Build/test.json", {onProgress: window.UnityProgress});
  return<div id="gameContainer" style={{width: 960, height: 600}}></div>
}

export default withAuthenticator(withHeader(Trainer));
