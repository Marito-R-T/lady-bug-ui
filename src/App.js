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
import MainPage from './main-page/MainPage'
import CreateUser from './users/CreateUser';
import ProjectsList from './admin/ProjectsList';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="login" element={<LogIn />}/>
        </Route>
        <Route path="/profile" element={<MainPage />}>
          <Route path="add-developer" element={<CreateUser />}/>
          <Route path="projects-list" element={<ProjectsList />}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
