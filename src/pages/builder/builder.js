import React, { useEffect, useState } from "react";
import BuilderForm from "./builderForm/builderForm";
import BuilderHeader from "./builderHeader/builderHeader";
import BuilderGame from "./builderGame/builderGame";
import withHeader from "../../containers/header/withHeader";

export const Builder = () => {
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
    <div>
      <BuilderHeader />
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <BuilderForm />
        <BuilderGame />
      </div>
    </div>
  );
};

export default withHeader(Builder);
