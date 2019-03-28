import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[300],
      dark: grey[900],
    },
  },
})

export default MuiTheme;
