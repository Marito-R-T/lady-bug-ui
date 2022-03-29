import React from 'react';
import '../App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PostPhaseDev from '../hooks/PhaseSubmit';


function Phase() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(!isNaN(data.get("hours")) && !isNaN(data.get("cost"))){
            PostPhaseDev(1, data.get("comment"), data.get("hours"), data.get("cost"));
        }
    }
    
    return (
        <Container component="main">
        <CssBaseline />
            <Box
                component="form"
                sx={{
                    marginTop: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                
                <Typography sx={{ topMargin: '36px',mt: 3, mb: 2 }} variant="h2" color="dark.main" component="div">
                    Testing
                </Typography>
                <br></br>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card color="dark.main" sx={{ backgroundColor:'primary.clear'}}>
                            <CardContent >
                                <Typography variant="h4" sx={{ fontSize: 24 }} color="dark.main" gutterBottom>
                                Execution 
                                </Typography>
                                <Typography variant="h6" component="div" color="black">
                                    Developer:
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="secondary">
                                    You
                                </Typography>
                                <br></br>
                                <Typography display="inline" variant="h6" component="div" color="black">
                                    Start Date:
                                </Typography>
                                <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                    10/10/22
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography display="inline" variant="h6" component="div" color="black">
                                    Due Date: 
                                </Typography>
                                <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                    28/10/22
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card color="secondary" sx={{ backgroundColor:'primary.clear' }}>
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: 24 }} color="dark.main" gutterBottom>
                                    Case Information
                                </Typography>
                                <Typography variant="h6" component="div" color="black">
                                    Project Name:
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Lady Bugger
                                </Typography>
                                <Typography variant="h6" component="div" color="black">
                                    Case Name:
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Login Bugs
                                </Typography>
                                <Typography variant="h6" component="div" color="black">
                                    Case Description
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    This case is for fixing login problems
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card color="secondary" sx={{ backgroundColor:'primary.clear' }}>
                            <CardContent>
                                <TextField
                                    id="comment"
                                    name="comment"
                                    label="Comment to Work"
                                    required
                                    multiline
                                    color = "dark"
                                    fullWidth
                                    rows={6}
                                />
                                <br></br>
                                <br></br>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="hours"
                                            name="hours"
                                            label="Hours"
                                            fullWidth
                                            required
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <OutlinedInput
                                            id="cost"
                                            name="cost"
                                            fullWidth
                                            required
                                            placeholder="Cost"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color="dark"
                                >
                                    <Typography
                                        component="h1"
                                        color="white"
                                        noWrap
                                        sx={{ flexGrow: 1 }}
                                    >
                                        Submit Work
                                    </Typography>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    );
}

export default Phase