import { createTheme } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";


export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#ff3b30',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    error: {
      main: red.A400
    },
    warning: {
      main: yellow.A400
    },
    info: {
      main: blue.A400
    },
    success: {
      main: green.A400
    } 
  },
  typography: {
    allVariants: {
      color: '#616161'
    },
    h1: {
      color: '#000',
      fontSize: '2.20rem',
      fontWeight: '500'

    },
    h3: {
      fontSize: '1.20rem',
      fontWeight: '400'
    },
  },
  components:{}
});

// mainTheme.typography.h1 = {
  
// }