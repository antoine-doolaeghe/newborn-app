import React from "react";
import Slider from "@material-ui/core/Slider";

const DefaultSlider = props => {
  return (
    <Slider
      {...props}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      marks
    />
  );
};

export default DefaultSlider;
