import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const blackColor = "#000";
const whiteColor = "#fff";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },

    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },

    text: {
      primary: blackColor,
      secondary: blackColor,
      disabled: blackColor,
    },

    action: {
      active: blackColor,
    },

    background: {
      default: grey[100],
      paper: whiteColor,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
