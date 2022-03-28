import React, { useEffect } from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function UserProfile() {
    //const [user, setUser] = React.useState(null)
    const { id } = useParams();
    const [user, setUser] = React.useState();


    useEffect(() => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' },
        //     body: JSON.stringify({ id: id, token: Cookies.get('token') })
        //   };
        // const fetchUser = async () => {
        //     console.log(Cookies.get('token'))
        //     console.log(requestOptions)
        //     const response = await fetch('https://ladybugger.herokuapp.com/profile/' + id, requestOptions);
        //     setUser(response);
        // }
        // fetchUser();
    }, []);


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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="B"
                            src={process.env.PUBLIC_URL + "/bee.jpg"}
                            sx={{ width: 200, height: 200 }}
                        />
                    </Stack>

                </div>
                <Typography sx={{ topMargin: '36px',mt: 3, mb: 2 }} variant="h2" color="dark.main" component="div">
                    Jose Gomez
                </Typography>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card color="dark.main" sx={{ backgroundColor:'primary.clear',maxWidth: 350, minWidth: 350 , maxHeight: 250, minHeight:250,marginRight: '36px'}}>
                        <CardContent >
                            <Typography variant="h4" sx={{ fontSize: 24 }} color="dark.main" gutterBottom>
                                Personal Information
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                Email:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                jgomez1995@gmail.com
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                Full Name:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Jose Armando Gomez
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card color="secondary" sx={{ backgroundColor:'primary.clear',maxWidth: 350, minWidth: 350, maxHeight: 250, minHeight:250 }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ fontSize: 24 }} color="dark.main" gutterBottom>
                                Work Stats
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                Projects Worked On:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="secondary">
                                10
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                User Creation Date
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                10/10/20
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Projects</Button>
                        </CardActions>

                    </Card>



                </div>
                <br></br>
                <br></br>



            </Box>
        </div>
    );
}

export default UserProfile