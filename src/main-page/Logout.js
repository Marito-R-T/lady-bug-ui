import React from "react";
import { 
    IconButton,
    Typography,
    Badge
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Logout() {
    const onLogout = () => {
      Cookies.remove('token');
      Cookies.remove('tokenType');
      //Auth.setAuth(false);
    }

    return(
        <IconButton color="dark" onClick={onLogout} component={Link} to="/">
          <Typography color="dark.main">
            <Badge badgeContent='Logout' color="primary">
              <LogoutIcon />
            </Badge>
          </Typography>
        </IconButton>
        );
}