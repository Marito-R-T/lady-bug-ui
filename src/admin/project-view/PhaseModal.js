import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DateTimeRangePicker from '../../theme/DateTimeRangePicker';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';

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
  return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Phase View
                </Typography>
                <Divider />
                <DateTimeRangePicker color="#f15454"/>
                <Divider />
                <Box sx={{ py: 1 }}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                        <Avatar src={process.env.PUBLIC_URL + "/ant.png"} style={{ height:50, width: 50 }}/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={developers}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Developer Assigned" />}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
  );
}

const developers=[
    { label:'Mario', age: 21 },
    { label:'Sergio', age: 21 },
    { label:'Zofia', age: 22 },
    { label:'Soberanis', age: 22 },
    { label:'Bryan', age: 21 },
    { label:'Luis', age: 20 },
]