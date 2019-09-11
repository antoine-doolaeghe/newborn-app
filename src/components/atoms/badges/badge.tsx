import React from "react";
import { StyledBadge } from "./style/badge.style";

export interface IBadgeProps {
  label: string;
  width: string;
  height: string;
}

const DefaultProps = {
  height: "25px",
  width: "auto",
  label: "--"
};

const Badge = ({ width, height, label }: IBadgeProps): React.ReactElement => {
  return (
    <StyledBadge width={width} height={height}>
      {label}
    </StyledBadge>
  );
};

Badge.defaultProps = DefaultProps;

export default Badge;
