import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import StepCase from './CaseProgress2';
import LinearLabel from './CaseProgress';
import { Link } from 'react-router-dom';

function CaseView(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
    <Card sx={{ display: 'flex', backgroundColor:'primary.clear' }}>
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
            </CardContent>
        </CardActionArea>
        </Card>
            <StepCase/>
            <LinearLabel progress="10" />
      <Box>
          Hola
      </Box>
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