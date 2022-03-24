import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function SignUp() {
  let navigate = useNavigate();
  
  const fetchPhase = async (/*firstName*/fN, /*middleName*/mN, /*lastName*/lN, /*email*/e, /*password*/p, /*roles*/r) => {
    const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*', 'Authorization': auth},
      body: JSON.stringify({ email: e, password: p, name: fN, middleName: mN, lastName: lN, role: r })
    };
    await fetch('https://ladybugger.herokuapp.com/api/auth/create-user',requestOptions).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      navigate("/add-developer");
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    var roles = ["user"];
    if(data.get('isAdmin')){
      roles.push("admin")
    }
    fetchPhase(data.get('firstName'), data.get('middleName'), data.get('lastName'), data.get('email'), data.get('password'), roles);
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={process.env.PUBLIC_URL + "/ant.png"}/>
          <Typography component="h1" variant="h5">
            New Developer
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="middleName"
                  label="Middle"
                  name="middleName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                    control={
                    <Checkbox 
                        value="isAdmin" 
                        color="primary" 
                        icon={<Avatar  src={process.env.PUBLIC_URL + "/queenbeeoutlined.png"}/>}
                        checkedIcon={<Avatar  src={process.env.PUBLIC_URL + "/queenbee.png"}/>}
                    />
                    }
                  label="This User is a Admin of System."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
  );
}