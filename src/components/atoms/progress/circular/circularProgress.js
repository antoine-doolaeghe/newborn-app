import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const WrappedCircularProgress = () => {
  return (
    <CircularProgress variant="indeterminate" data-testid="circularProgress" />
  );
};

export default WrappedCircularProgress;
