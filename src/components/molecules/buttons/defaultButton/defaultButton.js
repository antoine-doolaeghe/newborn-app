import React from "react";
import PropTypes from "prop-types";
import { StyledDefaultButton } from "./style/defaultButton.style";

const DefaultButton = ({ children, onClick, color, loading }) => {
  return (
    <StyledDefaultButton loading={loading} onClick={onClick} color={color}>
      {children}
    </StyledDefaultButton>
  );
};

DefaultButton.defaultProps = {
  children: ""
};

DefaultButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "light",
    "dark",
    "primary",
    "secondary",
    "success",
    "danger"
  ]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default DefaultButton;
