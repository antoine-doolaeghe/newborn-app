import React from "react";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import ViewList from "@material-ui/icons/ViewList";
import Home from "@material-ui/icons/Home";
import PropTypes from "prop-types";
import { IconButton } from "../../../components/molecules/buttons";

const NavigationButton = ({ redirect }) => {
  const returnNavigationIcon = () => {
    switch (redirect) {
      case "live":
        return <PlayCircleOutline />;
      case "catalogue":
        return <ViewList />;
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
      case "catalaogue":
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

NavigationButton.propTypes = {
  redirect: PropTypes.oneOf(["live", "catalogue", "/"])
};

export default NavigationButton;
