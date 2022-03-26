import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DvrIcon from '@mui/icons-material/Dvr';

export default function MainListItems() {
  const [admin, setAdmin] = React.useState(true);
  const [pm, setPm] = React.useState(true);
  const [developer, setDeveloper] = React.useState(true);

  return (
    <React.Fragment>
      <ListItemButton component={Link} to="profile/1">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {admin && <div>
        <ListItemButton component={Link} to="add-developer">
          <ListItemIcon>
            <Avatar src={process.env.PUBLIC_URL + "/ant.png"}/>
          </ListItemIcon>
          <ListItemText primary="Add Developer" />
        </ListItemButton>
        <ListItemButton component={Link} to="projects-list">
          <ListItemIcon>
            <DvrIcon />
          </ListItemIcon>
          <ListItemText primary="Projects List" />
        </ListItemButton>
        <ListItemButton component={Link} to="assigned-projects">
          <ListItemIcon>
            <DvrIcon />
          </ListItemIcon>
          <ListItemText primary="Assigned Projects" />
        </ListItemButton>
        <ListItemButton component={Link} to="create_project">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Create Project" />
        </ListItemButton>
        <ListItemButton component={Link} to="create_case_type">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Create Case Type" />
        </ListItemButton>
      </div>}
      {(admin || pm) && <div>
        <ListItemButton component={Link} to="project-view">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </ListItemButton>
        <ListItemButton component={Link} to="user_phases/1">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User Phases" />
        </ListItemButton>
      </div>}
      {(pm) && <div>
      </div>}
      {developer && <div>
        <ListItemButton component={Link} to="cases-list">
          <ListItemIcon>
            <DvrIcon />
          </ListItemIcon>
          <ListItemText primary="Cases List" />
        </ListItemButton>
        <ListItemButton component={Link} to="phase/1">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Phase" />
        </ListItemButton>
      </div>}
    </React.Fragment>
  );
}

export const secondaryListItems = (
  <React.Fragment>
    <Typography
        variant="h6"
        noWrap
        sx={{ marginTop: '15px', marginBottom: '15px' }}
    >
        Saved reports
    </Typography>
    <Divider />
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);