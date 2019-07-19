import React from "react";
import ContentLoader from "react-content-loader";

const TextLoader = () => (
  <ContentLoader
    height={50}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="17" y="14" rx="4" ry="4" width="117" height="6" />
    <rect x="18" y="34" rx="3" ry="3" width="85" height="6" />
  </ContentLoader>
);

export default TextLoader;
