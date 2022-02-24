import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
      danger: '#D61E37',
    },
    palette: {
      primary: {
        main: '#f15454',
        darker: '#942B3B',
      },
      neutral: {
        main: '#e09F89',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D61E37'
      },
      dark: {
        main: '#002A62'
      }
    },
  });