import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 980px;
  height: 300px;
`;

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
        instance.Quit();
      }
    };
  }, [instance]);

  return <Wrapper id="gameContainer" />;
}

export default Builder;
