import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CaseCreateModal from '../../project-manager/CaseCreateModal';
import AddBoxIcon from '@mui/icons-material/AddBox';

function MainInfo(props) {
  const { post } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => setOpen(false);

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} />
            <Grid item xs={12} sm={8}>
              <Typography component="h1" variant="h3" color="dark.black" gutterBottom>
                <b>
                {post.name}</b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="outlined" startIcon={<AddBoxIcon />} onClick={handleOpen}>
                <Typography variant="subtitle" color="dark.black">
                  Add Case
                </Typography>
              </Button>
              <CaseCreateModal open={open} handleClose={handleClose}/>
            </Grid>
          </Grid>
            <Typography variant="h5" color="dark.black" paragraph>
              {post.description}
            </Typography>
            <Button variant="outlined" color="secondary" startIcon={<Avatar src={process.env.PUBLIC_URL + "/firefly.png"}/>}>
                <Typography color={"dark.black"} variant="spam">
                    {post.pm_name}
                </Typography>
            </Button>
            <Typography variant="body1" sx={{ columns: 1, columnSpacing: 5 }}>
                <b>start date:</b>  
                {"  "+post.start_date}
                <b style={{ color:'#036666' }}>. . . . . . . . . . .</b>
                <b>due date:</b>
                {"  "+post.due_date}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainInfo;