import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function MainInfo(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'dark.green',
        color: '#fff',
        mb: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        py: 1,
        px: 1
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 6, md: 1 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="dark.black" gutterBottom>
                <b>
              {post.name}</b>
            </Typography>
            <Typography variant="h5" color="dark.black" paragraph>
              {post.description}
            </Typography>
            <Button variant="outlined" color="secondary" startIcon={<Avatar src={process.env.PUBLIC_URL + "/firefly.png"}/>}>
                <Typography color={"dark.black"} variant="spam">
                    {post.pmName}
                </Typography>
            </Button>
            <Typography variant="body1" sx={{ columns: 1, columnSpacing: 5 }}>
                <Typography color="dark.black" variant="body1">
                    <b>start date:</b>  
                    {"  "+post.startDate}
                    <b style={{ color:'#036666' }}>. . . . . . . . . . .</b>
                    <b>due date:</b>
                    {"  "+post.dueDate}
                </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainInfo.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    pmName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainInfo;