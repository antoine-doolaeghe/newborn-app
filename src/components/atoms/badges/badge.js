import React from "react";
import PropTypes from "prop-types";
import { StyledBadge } from "./style/badge.style";

const Badge = ({ label, width, height }) => {
  return (
    <StyledBadge width={width} height={height}>
      {label}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  height: "25px",
  width: "auto",
  label: "--"
};

Badge.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string
};

export default Badge;
