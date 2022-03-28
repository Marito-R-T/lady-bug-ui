import React, { useState, useEffect } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const CreateProject = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchProject = async (/*Name*/name, /*description*/desc, /*pm ID*/pmId, /*start Date*/sd, /*due Date*/dd) => {
        const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
        try {
            const response = await axios.post('https://ladybugger.herokuapp.com/admin/create-project', 
                {
                    name: name,
                    description: desc,
                    pmId: 4,
                    startDate: sd,
                    dueDate: dd
                }, 
                {
                    headers: {
                        'Authorization': auth
                    }
                }
            );  
            console.log('Success:', response.data);  
            navigate('#');
        } catch(error) {
            console.error('Error:', error);
        }
    }

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
        const response = await axios.get('https://ladybugger.herokuapp.com/admin/devs-list', 
            {
                headers: {
                    'Authorization': auth
                }
            }
        );
       
        console.log(response.data)
        // setItems(reponse.data);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log(data.get('dueDate'));
      var split = data.get('startDate').split('/');
      const startDate = split[2] + "-" + split[0] + "-" + split[1];
      split = data.get('dueDate').split('/');
      const dueDate = split[2] + "-" + split[0] + "-" + split[1];
      fetchProject(data.get('name'), data.get('description'), data.get('pmId'), startDate, dueDate);
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
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography component="h1" variant="h3">
                New Project
                </Typography>
                    <br></br>
                    <br></br>
                    <Grid item xs={20} sm={18}>
                    <TextField
                        size="small"
                        required
                        id="name"
                        name="name"
                        label="Project Name"
                        fullWidth
                        variant="standard"
                    />
                    </Grid>
                    <br></br>
                    <Grid item xs={20} sm={18}>
                    <TextField
                        fullWidth
                        required
                        id="description"
                        name="description"
                        label="Project Discription"
                        multiline
                        rows={4}

                    />
                    </Grid>
                    <br></br>
                    <Autocomplete
                        disablePortal
                        required
                        style={{ alignSelf: 'center' }}
                        id="pmId"
                        name="pmId"
                        options={items}
                        renderInput={(params) => <TextField {...params} label="Project Manager" />}
                    />
                    <br></br>
                    <LocalizationProvider dateAdapter={AdapterDateFns} style={{ alignSelf: 'center' }}>
                        <Stack spacing={3}>
                            <DesktopDateRangePicker
                            startText="Desktop start"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                <TextField {...startProps}
                                    required
                                    id="startDate" name="startDate" />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} 
                                    required
                                    id="dueDate" name="dueDate" />
                                </React.Fragment>
                            )}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                        <Grid item xs={6} sm={4} md={6} >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{  mt: 3, mb: 2 }}
                            color="secondary"
                        >Cancel</Button>
                        </Grid>
                        <Grid item xs={6} sm={4} md={6} >
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
                            >Create</Typography>
                        </Button>
                        </Grid>
                    </Grid>
            </Box>
        </Box>
    </Container>

    );
}

export default CreateProject