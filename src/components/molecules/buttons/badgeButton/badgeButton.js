import React from "react";
import PropTypes from "prop-types";
import { StyledBadgeButton } from "./style/badgeButton.style";

const BadgeButton = ({ children, onClick, color }) => {
  return (
    <StyledBadgeButton onClick={onClick} color={color}>
      {children}
    </StyledBadgeButton>
  );
};

BadgeButton.defaultProps = {
  children: ""
};

BadgeButton.propTypes = {
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

export default BadgeButton;
