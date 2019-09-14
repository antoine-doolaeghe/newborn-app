import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledDefaultButton } from "../defaultButton/style/defaultButton.style";
import { Theme } from "../../../../theme/theme";

const StyledRoundButton = styled(StyledDefaultButton)`
  height: ${props => props.size};
  border-radius: ${props => props.size};
  width: ${props => props.size};
  display: flex;
  justify-content: space-around;
  font-size: ${Theme.fontSize.medium};
`;

const RoundButton = ({ children, onClick, color, size }) => {
  return (
    <StyledRoundButton size={size} onClick={onClick} color={color}>
      {children}
    </StyledRoundButton>
  );
};

RoundButton.defaultProps = {
  children: "",
  size: Theme.spacing.xxlarge
};

RoundButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
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
export default RoundButton;
