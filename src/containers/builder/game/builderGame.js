import React from "react";

export const BuilderGame = () => {
  // const [instance, setInstance] = useState(null);
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

  return (
    <div
      style={{
        height: "100%",
        background: "black",
        width: "100%",
        position: "fixed",
        zIndex: -1,
        flex: 1
      }}
      id="gameContainer"
    />
  );
};

export default BuilderGame;
