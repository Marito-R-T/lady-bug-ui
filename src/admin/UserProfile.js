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
import GetProfile from '../hooks/GetProfile';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    let navigate = useNavigate();
    //const [user, setUser] = React.useState(null)
    const { id } = useParams();
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        GetProfile().then((profile) => {
        if(profile != undefined){
            setUser(profile);
        } else {
            navigate("/", { replace: true });
        } });
    }, []);


    return (
        <div>
            {
                user !== null ? 
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
                    {`${user.name} ${user.last_name}`}
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
                                {user.email}
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                Full Name:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {`${user.name} ${user.middle_name} ${user.last_name}`}
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
                                {user.phases_worked_on}
                            </Typography>
                            <Typography variant="h6" component="div" color="black">
                                User Creation Date
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {user.start_date}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Projects</Button>
                        </CardActions>

                    </Card>
                </div>
                <br></br>
                <br></br>
            </Box> : <p>loading profile data...</p>
            }
        </div>
    );
}

export default UserProfile;