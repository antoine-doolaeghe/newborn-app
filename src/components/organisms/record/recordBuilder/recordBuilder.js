import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../../../containers/header/withHeader";

function Builder() {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (!instance) {
      setInstance(
        window.UnityLoader.instantiate("gameContainer", "Build/test.json", {
          onProgress: window.UnityProgress
        })
      );
    }
  }, [instance]);

  useEffect(() => {
    return () => {
      if (instance) {
        instance.Quit(() => {
          console.log("done!");
        });
      }
    };
  }, [instance]);

  return <div id="gameContainer" style={{ width: "980px", height: "300px" }} />;
}

export default Builder;
