import { 
  Routes,
  Route } from 'react-router-dom';
import './App.css';
import LogIn from './log-in/LogIn';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './theme/AppBar';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="Login" element={<LogIn />}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
