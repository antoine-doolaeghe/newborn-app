import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme } from "../../../../theme/theme";
import { Button } from "../button.style";

export const StyledBadgeButton = styled(Button)`
  align-items: center;
  background: ${props => Theme.palette[props.color].main};
  border-radius: ${Theme.radius.medium};
  border: none;
  color: ${Theme.font.light};
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.weight.normal};
  justify-content: space-around;
  margin: ${Theme.spacing.small};
  outline: none;
  padding: 3px 7px;
`;

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
