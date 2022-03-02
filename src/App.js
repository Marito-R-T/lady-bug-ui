import { 
  Routes,
  Route } from 'react-router-dom';
import './App.css';
import LogIn from './log-in/LogIn';
import CreateProject from './admin/CreateProject';
import CreateCaseType from './admin/CreateCaseType';
import UserProfile from './admin/UserProfile';
import UserPhases from './admin/UserPhases';
import Phase from './admin/Phase';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './theme/AppBar';
import MainPage from './main-page/MainPage'
import CreateUser from './admin/CreateUser';
import ViewProject from './admin/project-view/ViewProject'
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
        <Route path="/" element={<MainPage />}>
          <Route path="profile/:id" element={<UserProfile/>}/> 
          <Route path="phase/:id" element={<Phase/>}/> 
          <Route path="user_phases/:id" element={<UserPhases/>}/> 
          <Route path="create_project" element={<CreateProject />}/> 
          <Route path="create_case_type" element={<CreateCaseType />}/> 
          <Route path="add-developer" element={<CreateUser />}/>
          <Route path="project-view" element={<ViewProject />} />
          <Route path="projects-list" element={<ProjectsList />}/>
        </Route>

      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
