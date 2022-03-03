import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DvrIcon from '@mui/icons-material/Dvr';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItemButton>
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
    <ListItemButton component={Link} to="cases-list">
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
      <ListItemText primary="Cases List" />
    </ListItemButton>
    <ListItemButton component={Link} to="assigned-projects">
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
    <ListItemText primary="Assigned Projects" />
    </ListItemButton>
    <ListItemButton component={Link} to="project-view">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Project" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

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