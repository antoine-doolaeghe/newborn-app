import React from "react";
import { Link } from "react-router-dom";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Home from "@material-ui/icons/Home";
import { IconButton } from "../../../components/molecules/buttons";

const NavigationButton = ({ navigation, location }) => {
  const returnNavigationIcon = () => {
    switch (navigation) {
      case "Live":
        return <PlayCircleOutline />;
      case "Home":
        return <Home />;
      default:
        return "hello";
    }
  };
  const returnNavigationText = () => {
    switch (navigation) {
      case "Live":
        return "Live";
      case "Home":
        return "";
      default:
        return "hello";
    }
  };
  const returnWidth = () => {
    switch (navigation) {
      case "Live":
        return "100px";
      default:
        return null;
    }
  };

  return (
    <Link to="/trainer">
      <IconButton color="dark" width={returnWidth()}>
        {returnNavigationIcon()}
        {returnNavigationText()}
      </IconButton>
    </Link>
  );
};

export default NavigationButton;
