import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GetLogo() {
    return (<img className='LogoLogin' src={process.env.PUBLIC_URL + "/Logo.png"} alt="Logo"/>);
}

export default function Login() {
  let navigate = useNavigate();

  const fetchPhase = async (/*email*/e, /*password*/p) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', 
        {
          email: e, 
          password: p
        }
      );
      console.log('Success:', response.data)
      console.log(response.data.roles[0])
      let resp = response.data;
      if(resp.roles.length > 0) {
        let roles = resp.roles[0];
        if(resp.roles.length > 1) {
          roles = roles + ',' + resp.roles[1];
        }
        console.log(roles);
        Cookies.set('roles', roles, {secure:true});
      }
      Cookies.set('token', resp.accessToken, { secure: true });
      Cookies.set('tokenType', resp.tokenType, {secure: true});
      navigate("/profile/"+resp.id, { replace: true });
    } catch(error) {
      console.error(error);
    }   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetchPhase(data.get('email'), data.get('password'));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <GetLogo/>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, text:{ color:'white' } }}
                color="dark"
              >
                <Typography variant="h6" color="white">
                  Sign In
                </Typography>
              </Button>
              <Grid container>
              </Grid>
            </Box>
          </Box>
        </Container>
    </div>
  );
}