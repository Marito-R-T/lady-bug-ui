import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import StepCase from './CaseProgress2';
import PhasesView from './PhasesView';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import CancelIcon from '@mui/icons-material/Cancel';

const actual = {
    nameType: 'N',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'inProgress',
  };

const completed = [
    {
      id: 1,
      nameType: 'F',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'inProgress',
    },
    {
      id: 2,
      nameType: 'G',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Canceled',
    },
    {
      id: 3,
      nameType: 'H',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Finished',
    },
  ];

const toDo = [
    {
      id: 1,
      nameType: 'K',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Canceled',
    },
    {
      id: 2,
      nameType: 'L',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Finished',
    },
]

function CaseView(props) {
  const { post } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid item xs={12} md={12} sx={{ py:5 }} >
    <Card sx={{ backgroundColor:'primary.clear', columnCount:1 }}>
        <CardActionArea>
            <CardContent>
                <Typography component="h2" variant="h5" color="dark.main">
                {post.nameType}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                Start Date {":  "+post.startDate}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                Due Date {":  "+post.dueDate}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                {post.status}
                </Typography>
                <StepCase name={post.id} />
            </CardContent>
        </CardActionArea>
            {(post.status !== "Canceled" && post.status !== "Finished") ? 
              <div>
                <IconButton aria-label="delete" color="dark" onClick={handleClick}>
                  <CancelIcon />
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>This case has been Canceled.</Typography>
                  <Button fullWidth aria-describedby={id} fullwidth variant="contained">
                    Confirm
                  </Button>
                </Popover>
              </div> : 
              null
            }    
        <PhasesView actual={actual} toDo={toDo} completed={completed}/>
        </Card>
    </Grid>
  );
}

CaseView.propTypes = {
  post: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    nameType: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseView;