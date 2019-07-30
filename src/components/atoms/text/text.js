import styled from "styled-components";
import PropTypes from "prop-types";
import { Theme as defaultTheme } from "../../../theme/theme";
import { mapColor } from "../../../utils/helpers/themeHelpers";

const Text = styled.p(props => {
  const { weight, color, size } = props;
  const theme = {
    ...defaultTheme,
    ...props.theme
  };

  const mapSize = choice => {
    return theme.fontSize[choice];
  };

  return `
    color: ${mapColor(theme, color)};
    font-size: ${mapSize(size)};
    font-weight: ${weight};
    line-height: 1.4;
    margin: 0;
    padding: 0;
  `;
});

Text.propTypes = {
  size: PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large"]),
  color: PropTypes.oneOf([
    "light",
    "dark",
    "primary",
    "secondary",
    "success",
    "danger"
  ]),
  weight: PropTypes.oneOf(["thin", "normal", "bold"])
};

Text.defaultProps = {
  size: "medium",
  color: "dark",
  weight: "normal"
};

export default Text;
