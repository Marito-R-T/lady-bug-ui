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
import getDevs from '../hooks/useDevs';
import PostProject from '../hooks/admin/PostCreateProject';
import MomentUtils from '@date-io/date-fns';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@mui/lab/DatePicker';

const CreateProject = () => {
    let navigate = useNavigate();
    const [valuei, setValuei] = React.useState(null);
    const [valuef, setValuef] = React.useState(null);
    const [items, setItems] = useState([]);
    const [pmId, setPmId] = React.useState([null, null]);

    useEffect(() => {
        getDevs(setItems);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log(pmId['id']);
        var split = data.get('startDate').split('/');
        const startDate = `${split[2]}-${split[0]}-${split[1]}`;
        split = data.get('dueDate').split('/');
        const dueDate = `${split[2]}-${split[0]}-${split[1]}`;
        if(new Date(startDate) < new Date(dueDate)){
            PostProject(data.get('name'), data.get('description'), data.get('pmId'), startDate, dueDate);
        }
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 15,
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Box
                component="form"
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
                        options={items}
                        id="pmId" name="pmId"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderInput={(params) => <TextField {...params} required label="Project Manager" />}
                        onChange={(e,value) => (setPmId(value))}
                    />
                    <br></br>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DatePicker
                                label="Start Date"
                                value={valuei}
                                onChange={(newValue) => {
                                    if(valuef > newValue){
                                        setValuei(newValue);
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} required id="startDate" name="startDate"/>}
                            />
                            <DatePicker
                                label="Due Date"
                                value={valuef}
                                onChange={(newValue) => {
                                    if(valuei < newValue){
                                        setValuef(newValue);
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} required id="dueDate" name="dueDate"/>}
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