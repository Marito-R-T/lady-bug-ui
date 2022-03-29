import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DateTimeRangePicker from '../../theme/DateTimeRangePicker';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import getDevs from '../../hooks/GetDevList';
import PostAssignPhase from '../../hooks/PostPhaseAssign';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: 'primary.main',
  p: 4,
};

export default function PhaseModal(props) {
    const [items, setItems] = useState([]);
    const [valuei, setValuei] = React.useState(null);
    const [valuef, setValuef] = React.useState(null);
    const [devId, setDevId] = React.useState(null);
    const [description, setDescription] = React.useState();
    useEffect(() => {
        getDevs(setItems);
    }, []);
    const saveInformation = () => {
        console.log(description);
        if(valuei != null && valuef != null && devId != null && description != null){
            PostAssignPhase(`${devId['id']}`, '1', '1', valuei, valuef, description);
        }
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
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Phase View
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <IconButton aria-label="delete" color="dark" type="button" onClick={saveInformation}>
                            <SaveIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                <DateTimeRangePicker setInitDate={setValuei} setDueDate={setValuef} valuei={valuei} valuef={valuef} color="#f15454"/>
                <Divider />
                <Box sx={{ py: 1 }}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                        <Avatar src={process.env.PUBLIC_URL + "/ant.png"} style={{ height:50, width: 50 }}/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Autocomplete
                            disablePortal
                            required
                            id="combo-box-demo"
                            options={items}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Developer Assigned" />}
                            onChange={(e,value) => (setDevId(value))}
                        />
                    </Grid>
                </Grid>
                <Box py={2}/>
                <TextField
                    id="dev-work"
                    label="Developer Work"
                    disabled
                    multiline
                    color = "dark"
                    fullWidth
                    rows={6}
                />
                <Box py={2}/>
                <TextField
                    id="comment"
                    label="Comment to Work"
                    required
                    multiline
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    color = "dark"
                    fullWidth
                    rows={6}
                />
            </Box>
        </Modal>
  );
}