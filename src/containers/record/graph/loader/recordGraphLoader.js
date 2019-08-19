import React from "react";
import ContentLoader from "react-content-loader";

const RecordGraphLoader = () => (
  <ContentLoader
    height={300}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="49" rx="4" ry="4" width="500" height="300" />
  </ContentLoader>
);

export default RecordGraphLoader;
