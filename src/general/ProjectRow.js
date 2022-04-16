import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ProjectRow(props) {
    const { project } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
        
            <TableCell component="th" scope="row" align='center'>
              {project.id}
            </TableCell>
            <TableCell align='center'>{project.pm_name}</TableCell>
            <TableCell align='center'>{project.name}</TableCell>
            <TableCell align='center'>{project.due_date}</TableCell>
            {
              project.status === 1 ? <TableCell align='center'>Activo</TableCell> 
              : <TableCell align='center'>Inactivo</TableCell>
            }
            <TableCell align='center'>
              {
                project.status === 1 && (
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <CancelIcon />
                  </IconButton>
                )
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Testing
                  </Typography>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
}
    
ProjectRow.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pm_name: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired,
    }).isRequired,
};