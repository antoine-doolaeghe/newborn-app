/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ palette, shadows }) => ({
  root: {
    position: "absolute",
    bottom: 20,
    right: 20,
    paddingLeft: 16,
    paddingRight: 16,
    background: "linear-gradient(to right, #aea0d5, #eaafc8)",
    boxShadow: "0 0 20px 0 #f5005780"
  },
  label: {
    color: "white",
    textTransform: "none",
    fontSize: 15,
    fontWeight: 700
  },
  contained: {
    minHeight: 30,
    boxShadow: 0,
    "&:active": { boxShadow: 0 }
  }
}));

const BuyButton = ({ className, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button
      disabled
      className={`MuiButton--shinning ${className}`}
      {...props}
      classes={classes}
    >
      Sunshine
    </Button>
  );
};
BuyButton.propTypes = {
  className: PropTypes.string
};
BuyButton.defaultProps = {
  className: ""
};

export default BuyButton;
