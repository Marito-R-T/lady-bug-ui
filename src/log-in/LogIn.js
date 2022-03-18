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
import { Link, useNavigate } from 'react-router-dom';

//import logo from '/Logo.png';

function GetLogo() {
    return (<img className='LogoLogin' src={process.env.PUBLIC_URL + "/Logo.png"} alt="Logo"/>);
}

export default function Login() {

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    /*console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), password: data.get('password') })
    };
    Cookies.set("token", /*items['token']*/ data.get('email'), { secure: true });
    //postLogin(requestOptions);
    console.log(Cookies.get("token"));
    navigate("/profile/e");
  };

  const postLogin = async (requestOptions) => {
      const data = await fetch('https://api.imgflip.com/get_memes',requestOptions);
      const items = await data.json();
      //Auth.setAuth(false);
      Cookies.set("token", /*items['token']*/ true);
      return <Link to='/profile/3'/>;
  }

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