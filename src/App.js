import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import RoutesClass from './routes/routes';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RoutesClass/>
    </ThemeProvider>
    </div>
  );
}

export default App;
