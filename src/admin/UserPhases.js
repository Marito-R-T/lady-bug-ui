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
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';


function UserPhases() {
    const [user, setUser] = React.useState(null)
    const { id } = useParams();
    useEffect(() => {
        fetchPhases();
    }, []);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    };


    const fetchPhases = async () => {
        const data = await fetch('https://api.imgflip.com/get_memes', requestOptions);
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

                <Typography sx={{ topMargin: '36px', mt: 3, mb: 2 }} variant="h2" color="dark.main" component="div">
                    Jose's Phases
                </Typography>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card color="dark.main" sx={{ backgroundColor: 'primary.clear', maxWidth: '80%', minWidth: '90%', maxHeight: 250, minHeight: 250, marginRight: '36px' }}>
                        <CardContent >
                            
                            
                            <Typography display="inline" sx={{ mb: 1.5,fontSize: 28 }} color="dark.main">
                            Testing
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '75%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="yellow">
                            In Process
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography display="inline" variant="h6" sx={{ mb: 1.5 }}color="black" >
                                Project:
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '2%',marginRight: '70%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="text.secondary">
                                Lady Bugger
                            </Typography>
                            <br></br>
                            <Typography display="inline" variant="h6" sx={{ mb: 1.5 }}color="black" >
                                Case:
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '2%',marginRight: '73%',marginBottom:'50', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="text.secondary">
                                Login Bugs
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography display="inline" variant="h6" component="div" color="black">
                                Start Date:
                            </Typography>
                            <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                10/10/22
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '25%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="black">
                                Due Date:
                            </Typography>
                            <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                28/10/22
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small"><Link to ={'/phase/1'}>View Phase</Link></Button>
                        </CardActions>

                    </Card>




                </div>
                <br></br>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card color="dark.main" sx={{ backgroundColor: 'primary.clear', maxWidth: '80%', minWidth: '90%', maxHeight: 250, minHeight: 250, marginRight: '36px' }}>
                        <CardContent >
                            
                            
                            <Typography display="inline" sx={{ mb: 1.5,fontSize: 28 }} color="dark.main">
                            Audit
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '75%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="green">
                            Complete
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography display="inline" variant="h6" sx={{ mb: 1.5 }}color="black" >
                                Project:
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '2%',marginRight: '70%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="text.secondary">
                                Stock Manager
                            </Typography>
                            <br></br>
                            <Typography display="inline" variant="h6" sx={{ mb: 1.5 }}color="black" >
                                Case:
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '2%',marginRight: '73%',marginBottom:'50', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="text.secondary">
                                Tax Bugs
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography display="inline" variant="h6" component="div" color="black">
                                Start Date:
                            </Typography>
                            <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                1/08/21
                            </Typography>
                            
                            <Typography sx={{ marginLeft: '25%', mt: 3, mb: 2 }} display="inline" variant="h6" component="div" color="black">
                                Due Date:
                            </Typography>
                            <Typography display="inline" sx={{ mb: 1.5 }} color="text.secondary">
                                20/08/21
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to ={'/phase/1'}>View Phase</Link></Button>
                        </CardActions>

                    </Card>




                </div>
                <br></br>
                <br></br>



            </Box>
        </div>
    );
}

export default UserPhases