import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme } from "../../../theme/theme";

export const StyledBadge = styled.div`
  align-items: center;
  background-color: ${Theme.palette.success};
  border-radius: ${Theme.radius.small};
  color: white;
  display: flex;
  font-family: ${Theme.fontFamily};
  font-size: ${Theme.fontSize.small};
  font-weight: ${Theme.weight.normal};
  font-weight: ${Theme.weight.normal};
  height: ${props => props.height};
  justify-content: center;
  padding: 0px ${Theme.spacing.small};
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
  width: "auto",
  label: "--"
};

Badge.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string
};

export default Badge;
