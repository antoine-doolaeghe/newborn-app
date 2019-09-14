import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledDefaultButton } from "../defaultButton/style/defaultButton.style";
import { Theme } from "../../../../theme/theme";

const StyledIconButton = styled(StyledDefaultButton)`
  display: flex;
  font-size: ${Theme.fontSize.medium};
  height: ${props => props.height};
  justify-content: space-around;
  padding: 0;
  text-decoration: none;
  width: ${props => props.width};
`;

const IconButton = ({
  children,
  onClick,
  color,
  width,
  height,
  loading,
  disabled,
  id
}) => {
  return (
    <StyledIconButton
      width={width}
      height={height}
      onClick={onClick}
      color={color}
      disabled={disabled}
      data-testid={id}
      loading={loading}
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
