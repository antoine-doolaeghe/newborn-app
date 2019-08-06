import React from "react";
import ContentLoader from "react-content-loader";

const RecordHeaderLoader = () => (
  <ContentLoader
    height={50}
    width={50}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="49" rx="4" ry="4" width="50" height="50" />
  </ContentLoader>
);

export default RecordHeaderLoader;
