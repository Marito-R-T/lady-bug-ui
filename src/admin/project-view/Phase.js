import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DateTimeRangePicker from '../../theme/DateTimeRangePicker';
import PhaseModal from './PhaseModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
