export const mapColor = (theme, choice) => {
  const colors = {
    light: theme.palette.text.light,
    dark: theme.palette.text.dark,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success,
    danger: theme.palette.danger
  };
  return colors[choice];
};
