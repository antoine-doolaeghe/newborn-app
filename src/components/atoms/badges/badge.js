import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme } from "../../../theme/theme";

export const StyledBadge = styled.div`
  align-items: center;
  background-color: lightgreen;
  border-radius: ${Theme.radius.small};
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.weight.normal};
  font-weight: ${Theme.weight.normal};
  height: ${props => props.height};
  justify-content: center;
  margin: ${Theme.spacing.small};
  width: ${props => props.width};
`;

const Badge = ({ label, width, height }) => {
  return (
    <StyledBadge width={width} height={height}>
      {label}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  height: "25px",
  width: "35px",
  label: "--"
};

Badge.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string
};

export default Badge;
