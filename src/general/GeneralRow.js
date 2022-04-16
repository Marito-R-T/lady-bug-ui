import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';

export default function GeneralRow(props) {
    const { project } = props;
    const [open, setOpen] = React.useState(false);
    let navigate = useNavigate();

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => navigate("/project-view/"+project.id)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" align='center'>
              {project.id}
            </TableCell>
            <TableCell align='center'>{project.name}</TableCell>
            <TableCell align='center'>{project.pm_name}</TableCell>
            {
              project.status === 1 ? <TableCell align='center'>Activo</TableCell> 
              : <TableCell align='center'>Inactivo</TableCell>
            }
            <TableCell align='center'>{project.start_date}</TableCell>
            <TableCell align='center'>{project.due_date}</TableCell>
            <TableCell align='center'>{project.cases_amount}</TableCell>
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
        </React.Fragment>
      );
}
    
GeneralRow.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pm_name: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      start_date: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired,
      cases_amount: PropTypes.number.isRequired
    }).isRequired,
};