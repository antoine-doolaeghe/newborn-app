import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DefaultButton from "../defaultButton/defaultButton";
import { Theme } from "../../../../theme/theme";

const StyledIconButton = styled(DefaultButton)`
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  justify-content: space-around;
  font-size: ${Theme.fontSize.medium};
  text-decoration: none;
`;

const IconButton = ({ children, onClick, color, width, height }) => {
  return (
    <StyledIconButton
      width={width}
      height={height}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  children: "",
  height: Theme.spacing.xxlarge,
  width: Theme.spacing.xxlarge
};

IconButton.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
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

export default IconButton;
