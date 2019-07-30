import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withHeader from "../../containers/header/withHeader";

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

  return (
    <div style={{ display: "flex" }}>
      <div> Hello </div>
      <div
        id="gameContainer"
        style={{ width: "50%", height: "100%", position: "absolute", right: 0 }}
      />
    </div>
  );
}

export default withHeader(Builder);
