import colors from "./colors";

const Theme = {
  palette: {
    default: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000000"
    },
    dark: {
      main: "#323232",
      light: "#B2B2B2",
      dark: "#000000",
      contrastText: "#FFFFFF"
    },
    light: {
      main: "#BCBCBC",
      light: "#FFFFFF",
      dark: "#898989",
      contrastText: "#000000"
    },
    primary: {
      main: "#CC0000",
      light: "#FFEEEE",
      dark: "#880000",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#2A57C6",
      light: "#E9EFFF",
      dark: "#00144B",
      contrastText: "#FFFFFF"
    },
    sub: {
      main: "#2A57C6",
      light: "#E9EFFF",
      dark: "#00144B",
      contrastText: "#FFFFFF"
    },
    success: colors.green,
    warning: colors.amber,
    danger: colors.red,
    snow: colors.snow,
    white: colors.white,
    black: colors.black,
    grey: {
      medium: colors.grey.medium,
      dark: colors.grey.dark
    },
    lightBlue: colors.lightBlue,
    text: {
      dark: colors.text.dark,
      light: colors.text.light
    }
  },
  transition: {
    fast: "0.3s all ease-in-out 0.1s"
  },
  radius: {
    small: "5px",
    medium: "10px",
    large: "25px"
  },
  font: {
    light: colors.white,
    dark: colors.black
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700
  },
  fontSize: {
    xsmall: "0.75rem",
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
    xlarge: "2rem"
  },
  fontFamily: "IBM Plex Sans",
  spacing: {
    tiny: "3px",
    small: "5px",
    standard: "10px",
    msmall: "16px",
    medium: "20px",
    large: "32px",
    xlarge: "40px",
    xxlarge: "48px"
  },
  typography: {
    useNextVariants: true
  }
};

export { Theme };
