import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../theme/theme";

interface IStyledBadgeProps {
  width: string;
  height: string;
  children: string;
}

export const StyledBadge = styled(
  (props: IStyledBadgeProps): React.ReactElement => <div {...props} />
)((props): string => {
  return `
    align-items: center;
    background-color: ${Theme.palette.success};
    border-radius: ${Theme.radius.small};
    color: white;
    display: flex;
    font-family: ${Theme.fontFamily};
    font-size: ${Theme.fontSize.small};
    font-weight: ${Theme.weight.normal};
    font-weight: ${Theme.weight.normal};
    height: ${props.height};
    justify-content: center;
    padding: 0px ${Theme.spacing.small};
    margin: ${Theme.spacing.small};
    width: ${props.width};
  `;
});
