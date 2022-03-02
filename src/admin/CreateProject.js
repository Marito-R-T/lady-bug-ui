import React, { useState, useEffect } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

function CreateProject() {
    useEffect(() => {
        fetchItems();
    }, []);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1 })
    };

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.imgflip.com/get_memes');
        const items = await data.json();
        var list = []
        items.data.memes.map(item => (
            list = list.concat({ "id": item.id, "label": item.name })
        ))
        console.log(list)
        setItems(list);
    }

    return (

        <div>
           
            
            <Box
                component="form"
                sx={{
                    marginTop: 15,
                    '& .MuiTextField-root': { m: 1, width: '55%' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>New Project  </h1>
                <div >
                    <TextField
                        style={{ width: '20%' }}
                        size="small"
                        required
                        id="standard-required"
                        label="Project Name"

                        variant="standard"
                    />
                    <br></br>
                    <Grid item xs={20} sm={18}>
                    <TextField
                        fullWidth
                        required
                        id="standard-multiline-static"
                        label="Project Discription"
                        multiline
                        rows={4}

                    />
                    </Grid>
                    <br></br>
                    <br></br>
                    <Autocomplete
                        disablePortal
                        style={{ alignSelf: 'center' }}
                        id="combo-box-demo"
                        options={items}

                        renderInput={(params) => <TextField {...params} label="Project Manager" />}
                    />
                    <br></br>
                    <Button
                        type="submit"
                        
                        variant="contained"
                        sx={{ marginRight: '36px',mt: 3, mb: 2 }}
                        color="secondary"
                    >Cancel</Button>
                    <Button
                        type="submit"

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
                </div>
            </Box>

            {/* {items.map(item => (
                <h1 key={item.id}>{item.name}</h1>
            ))} */}
        </div>

    );
}

export default CreateProject