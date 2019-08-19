import React, { useEffect, useState } from "react";

export const BuilderGame = () => {
  const [instance, setInstance] = useState(null);
  // useEffect(() => {
  //   if (!instance) {
  //     setInstance(
  //       window.UnityLoader.instantiate("gameContainer", "Build/test.json", {
  //         onProgress: window.UnityProgress
  //       })
  //     );
  //   }
  // }, [instance]);

  // useEffect(() => {
  //   return () => {
  //     if (instance) {
  //       instance.Quit(() => {
  //         console.log("done!");
  //       });
  //     }
  //   };
  // }, [instance]);

  return <div style={{ height: "calc(100vh - 150px)",background: "black", flex: 1 }} id="gameContainer" />;
};

export default BuilderGame;
