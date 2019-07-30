import React, { Fragment } from "react";
import NewbornList from "../../../newborn/list/newbornList";
import TextLoader from "../../../../components/atoms/text/loader/textLoader";

const GenerationListLoader = () => {
  const loadingTitle = () => (
    <div style={{ width: 200 }}>
      <TextLoader />
    </div>
  );
  return (
    <Fragment>
      <NewbornList title={loadingTitle()} loading />
      <NewbornList title={loadingTitle()} loading />
    </Fragment>
  );
};

export default GenerationListLoader;
