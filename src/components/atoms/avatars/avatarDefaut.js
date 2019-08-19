import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import { Theme } from "../../../theme/theme";

const AvatarDefault = styled(Avatar)`
  height: ${Theme.spacing.large};
  width: ${Theme.spacing.large};
  position: absolute;
  cursor: pointer;
  background: ${props => (props.last ? "lightBlue" : "")};
  font-weight: light;
  left: ${props => 25 * props.index};
`;

export default AvatarDefault;
