import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
      danger: '#D61E37',
    },
    palette: {
      primary: {
        main: '#f15454',
        darker: '#942B3B',
        contrastText: '#000000'
      },
      neutral: {
        main: '#e6b8aa',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D61E37'
      },
      dark: {
        //main: '#002A62'
        main: '#002A62'
      },
      white: '#ffffff'
    },
  });