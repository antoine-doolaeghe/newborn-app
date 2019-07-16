import React from "react";
import withHeader from "../../containers/header/withHeader";
import GenerationList from "../../containers/generations/generationList/generationList";

function Catalogue() {
  return <GenerationList />;
}

export default withHeader(Catalogue);
