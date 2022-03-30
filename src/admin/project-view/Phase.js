import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DateTimeRangePicker from '../../theme/DateTimeRangePicker';
import PhaseModal from './PhaseModal';

export default function Phase(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);}
    const handleClose = () => setOpen(false);

    return (
        <ListItem
            disablePadding
            secondaryAction={
              <div>
                <DateTimeRangePicker color="#8ab5b5"/>
              </div>
            }
          >
            <ListItemButton onClick={handleOpen}>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText  primary={`Line item ${props.info.nameType + 1}`} />
            </ListItemButton>
            <PhaseModal open={open} handleClose={handleClose}/>
        </ListItem>
    );
}
