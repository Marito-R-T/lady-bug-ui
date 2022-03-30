import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function CaseRow(props) {
    const { cases } = props;

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
            <TableCell />
            <TableCell component="th" scope="row" align='center'>
              {cases.id}
            </TableCell>
            <TableCell align='center'>{cases.description}</TableCell>
            <TableCell align='center'>{cases.caseTypeName}</TableCell>
            {
              cases.status === 1 ? <TableCell align='center'>Activo</TableCell> 
              : <TableCell align='center'>Inactivo</TableCell>
            }
            <TableCell align='center'>{cases.projectName}</TableCell>
            <TableCell align='center'>{cases.start_date}</TableCell>
            <TableCell align='center'>{cases.due_date}</TableCell>
          </TableRow>
          
        </React.Fragment>
      );
}
    
CaseRow.propTypes = {
    cases: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      caseTypeName: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      start_date: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
    }).isRequired,
};