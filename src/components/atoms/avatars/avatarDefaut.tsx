import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import { Theme } from "../../../theme/theme";

interface IStyledAvatarProps {
  last: boolean;
  index: number;
  children: string;
}

export const AvatarDefault = styled(
  (props: IStyledAvatarProps): React.ReactElement => <Avatar {...props} />
)((props): string => {
  return `
  height: ${Theme.spacing.large};
  width: ${Theme.spacing.large};
  position: absolute;
  cursor: pointer;
  background: ${props.last ? "lightBlue" : ""};
  font-weight: light;
  left: ${25 * props.index};
  `;
});

export default AvatarDefault;
