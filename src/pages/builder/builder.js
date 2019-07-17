import React, { useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";

function Builder() {
  useEffect(() => {
    window.UnityLoader.instantiate("gameContainer", "Build/test.json", {
      onProgress: window.UnityProgress
    });
  }, []);
  return (<div>
    <div> Hello </div>
    <div id="gameContainer" style={{ width: "50%", height: "100%", position: "absolute", right: 0 }} />
  </div>);
}

export default withHeader(Builder);
