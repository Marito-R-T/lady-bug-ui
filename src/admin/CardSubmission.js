import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PostRevisionPhase from '../hooks/manager/PostRevisionPhase';

export default function CardSubmission (props) {
    const sub = props.sub;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let isAccepted = data.get('isAccepted') != null;
        PostRevisionPhase(data.get('isAccepted'), 1, data.get('reason'))
    }
    
    return (
    <Grid item xs={6}>
        <Card color="secondary" sx={{ backgroundColor:'primary.clear' }}>
            <CardContent>
                <Typography variant="h6" component="div" color="black">
                    Comment
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {sub.comment}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="div" color="black">
                            Cost
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {sub.cost}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="div" color="black">
                            Hours
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {sub.hours}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="div" color="black">
                            Date Submited
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {sub.date}
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    component="form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        id="reason"
                        name="reason"
                        label="Comment"
                        multiline
                        required
                        fullWidth
                        rows={2}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <FormGroup sx={{ pr:20 }}>
                      <FormControlLabel name='isAccepted' required control={<Switch defaultChecked />} label="Accepted" />
                    </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="dark"
                        >
                            <Typography
                                component="h4"
                                color="white"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >Submit</Typography>
                    </Button>
                    </Grid>
                </Grid>
                </Box>
            </CardContent>
        </Card>
    </Grid>
    );
}