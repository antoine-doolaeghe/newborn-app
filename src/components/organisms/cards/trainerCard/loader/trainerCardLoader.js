import React from "react";
import ContentLoader from "react-content-loader";

const TrainerCardLoader = () => (
  <ContentLoader
    height={280}
    width={280}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="30" y="94" rx="5" ry="5" width="220" height="156" />
    <rect x="30" y="44" rx="5" ry="5" width="218" height="38" />
  </ContentLoader>
);

export default TrainerCardLoader;
