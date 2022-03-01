import { 
  Routes,
  Route } from 'react-router-dom';
import './App.css';
import LogIn from './log-in/LogIn';
import CreateProject from './admin/CreateProject';
import UserProfile from './admin/UserProfile';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './theme/AppBar';
import MainPage from './main-page/MainPage'
import CreateUser from './admin/CreateUser';
import ViewProject from './admin/project-view/ViewProject'

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
      
        <Route path="/" element={<Layout />} >
           
          <Route path="login" element={<LogIn />}/>
        </Route>
        <Route path="/" element={<MainPage />}>
          <Route path="profile/:id" element={<UserProfile/>}/> 
          <Route path="create_project" element={<CreateProject />}/> 
          <Route path="add-developer" element={<CreateUser />}/>
          <Route path="project-view" element={<ViewProject />} />
        </Route>

      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
