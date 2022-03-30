import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';

const drawerWidth = 0;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Layout() {
  
  useEffect(() => {
      Cookies.remove('token');
      Cookies.remove('tokenType');
  }, []);

  return (
    <div>
        <AppBar position="absolute" color="neutral">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="dark"
              aria-label="open drawer" 
              sx={{
                marginRight: '36px',
                //...(open && { display: 'none' }),
              }}
              component={Link} to="/"
            >
              <Avatar src={process.env.PUBLIC_URL + "/LogoP.png"} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="dark.main"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            <IconButton color="dark" component={Link} to="/login">
              <Typography color="dark.main">
                <Badge badgeContent='Login' color="primary">
                  <LoginIcon />
                </Badge>
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Outlet/>
      </div>
  );
}

export default Layout;