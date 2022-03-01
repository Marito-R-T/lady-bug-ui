import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import DateTimeRangePicker from '../../theme/DateTimeRangePicker'

export default function Phase(props) {
    const [checked, setChecked] = React.useState([1]);
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <ListItem
            key={props.info.nameType+props.i}
            disablePadding
            secondaryAction={
              <div>
                <DateTimeRangePicker/>
              </div>
            }
          >
            <ListItemButton>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText  primary={`Line item ${props.info.nameType + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}
