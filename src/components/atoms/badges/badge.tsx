import React from "react";
import { StyledBadge } from "./style/badge.style";

interface BadgeProptypes {
  label: string;
  width: string;
  height: string;
}

const Badge = ({
  width,
  height,
  label
}: BadgeProptypes): React.ReactElement => {
  return (
    <StyledBadge width={width} height={height}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
