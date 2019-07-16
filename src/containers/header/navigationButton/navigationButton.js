import React from "react";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Home from "@material-ui/icons/Home";
import { IconButton } from "../../../components/molecules/buttons";

const NavigationButton = ({ redirect }) => {
  const returnNavigationIcon = () => {
    switch (redirect) {
      case "live":
        return <PlayCircleOutline />;
      case "catalogue":
        return <Home />;
      case "/":
        return <Home />;
      default:
        return "";
    }
  };
  const returnNavigationText = () => {
    switch (redirect) {
      case "live":
        return "Live";
      case "catalogue":
        return "";
      default:
        return "";
    }
  };
  const returnWidth = () => {
    if (redirect === "live") {
      return "100px";
    }
  };

  return (
    <IconButton color="dark" width={returnWidth()}>
      {returnNavigationIcon()}
      {returnNavigationText()}
    </IconButton>
  );
};

export default NavigationButton;
