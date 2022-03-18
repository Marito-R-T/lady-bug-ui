import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import RoutesProtected from './Routes';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';

function App() {

  const [auth, setAuth] = React.useState(false);

  const readCookie = () => {
    const token = Cookies.get('token');
    if(token) {
      setAuth(true);
    }
  }
  /*React.useEffect(() => {
    readCookie();
  }, []);*/
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RoutesProtected/>
    </ThemeProvider>
    </div>
  );
}

export default App;
