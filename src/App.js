import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './theme/AppBar';
import MainPage from './main-page/MainPage'
import CreateUser from './admin/CreateUser';
import ViewProject from './admin/project-view/ViewProject'
import ProjectsList from './admin/ProjectsList';
import AssignedProjectsList from './manager/AssignedProjectsList';
import CasesList from './admin/CasesList';

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
          <Route path="assigned-projects" element={<AssignedProjectsList />}/>
          <Route path="cases-list" element={<CasesList />}/>
        </Route>

      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
