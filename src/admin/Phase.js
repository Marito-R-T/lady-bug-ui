import React, { useEffect } from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Phase() {
    const [user, setUser] = React.useState(null)
    const { id } = useParams();
    useEffect(() => {
        fetchPhase();
    }, []);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    };


    const fetchPhase = async () => {
        const data = await fetch('https://api.imgflip.com/get_memes',requestOptions);
        const items = await data.json();
        console.log(id)
        setUser(items);
        console.log(user)
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
                
                <Typography sx={{ topMargin: '36px',mt: 3, mb: 2 }} variant="h2" color="dark.main" component="div">
                    Testing
                </Typography>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card color="dark.main" sx={{ backgroundColor:'primary.clear',maxWidth: 390, minWidth: 390 , maxHeight: 250, minHeight:250,marginRight: '36px'}}>
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
                    <Card color="secondary" sx={{ backgroundColor:'primary.clear',maxWidth: 390, minWidth: 390, maxHeight: 250, minHeight:250 }}>
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



                </div>
                <br></br>
                <br></br>



            </Box>
        </div>
    );
}

export default Phase