import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StepCase from './CaseProgress2';
import LinearLabel from './CaseProgress';
import { Link } from 'react-router-dom';
import PhasesView from './PhasesView';

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
      nameType: 'F',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'inProgress',
    },
    {
      nameType: 'G',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Canceled',
    },
    {
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
      nameType: 'K',
      startDate: 'Nov 12, 2000',
      dueDate: 'Nov 12, 2001',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      status: 'Canceled',
    },
    {
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

  return (
    <Grid item xs={12} md={12} sx={{ py:5 }} >
    <Card sx={{ backgroundColor:'primary.clear', columnCount:1 }}>
        <CardActionArea component="Link" href="/profile">
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
                <StepCase/>
            </CardContent>
        </CardActionArea>
        <PhasesView actual={actual} toDo={toDo} completed={completed}/>
        </Card>
    </Grid>
  );
}

CaseView.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseView;