import React from "react";
import ContentLoader from "react-content-loader";

const NewbornParentsLoader = () => (
  <ContentLoader
    height={30}
    width={50}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="4" ry="4" width="50" height="30" />
  </ContentLoader>
);

export default NewbornParentsLoader;
