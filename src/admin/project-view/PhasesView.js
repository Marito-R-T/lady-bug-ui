import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Phase from './Phase';

export default function PhasesView(props) {
  const [openc, setOpenc] = React.useState(false);
  const [opent, setOpent] = React.useState(false);

  const clickCompleted = () => {
    setOpenc(!openc);
  };
  
  const clickToDo = () => {
    setOpent(!opent);
  };
  var i = 0;

  return (
    <List
        dense
        sx={{ width: '100%', bgcolor: 'dark.cleargreen' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
      <Phase info={props.actual}/>
      <ListItemButton onClick={clickCompleted}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Completed" />
        {openc ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openc} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.completed.map((value) => {
            i++;
            return(<Phase info={value} key={i}/>);
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={clickToDo}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="To Do" />
        {opent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          { 
          props.toDo.map((value) => {
            i++;
            return(<Phase info={value} key={i}/>);
          })}
        </List>
      </Collapse>
    </List>
  );
}
