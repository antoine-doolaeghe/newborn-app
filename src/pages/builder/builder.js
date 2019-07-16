import React, { useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";

function Builder() {
  useEffect(() => {
    window.UnityLoader.instantiate("gameContainer", "Build/test.json", {
      onProgress: window.UnityProgress
    });
  }, []);
  return <div id="gameContainer" style={{ width: "100%", height: "100%" }} />;
}

export default withHeader(Builder);
