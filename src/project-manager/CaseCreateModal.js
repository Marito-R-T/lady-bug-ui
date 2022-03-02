import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DateTimeRangePicker from '../theme/DateTimeRangePicker';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import SaveIcon from '@mui/icons-material/Save';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 600,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: 'primary.main',
  p: 4,
};

export default function CaseCreateModal(props) {
    const saveInformation = (event) => {
        console.log("saved");
    };
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10}>
                        <Typography id="modal-modal-title" variant="h4" component="h1">
                            Create Case
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <IconButton aria-label="delete" color="dark" onClick={saveInformation}>
                            <SaveIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} sx={{ py:3 }} >
                    <Card sx={{ backgroundColor:'primary.clear', columnCount:1 }}>
                        <CardContent>
                            <TextField fullWidth label="Title" color="dark" id="Title" />
                            <Box py={2}/>
                            <DateTimeRangePicker />
                            <Box py={2}/>
                            <TextField
                                id="description"
                                label="Description"
                                multiline
                                color = "dark"
                                fullWidth
                                rows={4}
                            />
                         </CardContent>
                        <Grid container spacing={2} py={2} px={5}>
                            <Grid item xs={12} sm={1}>
                                <Box paddingTop={1}/>
                                <ArrowUpwardIcon>Type</ArrowUpwardIcon>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={caseTypes}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Case Type" />}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Box>
        </Modal>
  );
}

const caseTypes=[
    { label:'Delete' },
    { label:'Revision' },
    { label:'Publicity' },
    { label:'Backend' },
    { label:'Frontend' },
]