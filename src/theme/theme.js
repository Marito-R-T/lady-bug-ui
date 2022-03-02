import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
      danger: '#D61E37',
    },
    palette: {
      primary: {
        main: '#f15454',
        darker: '#942B3B',
        clear: '#eddfe9',
        contrastText: '#000000'
      },
      neutral: {
        main: '#e6b8aa',
        darker: '#e8dae4',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D61E37'
      },
      dark: {
        //main: '#002A62'
        main: '#002A62',
        black: '#000000',
        green: '#036666',
        cleargreen: '#8ab5b5'
      },
      white: '#ffffff'
    },
  });