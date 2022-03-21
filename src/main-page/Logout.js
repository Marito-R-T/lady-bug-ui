import React from "react";
import { 
    IconButton,
    Typography,
    Badge
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function Logout() {
    const onLogout = () => {
        //Auth.setAuth(false);
        //Cookies.remove("token");
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