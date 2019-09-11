import React, { useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export const BuilderProgress = (): React.ReactElement => {
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        setCompleted(0);
        setBuffer(0);
      }
    };
  });

  useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
    </div>
  );
};

export default BuilderProgress;
