import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function UserRow(props) {
    const { users } = props;

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
            <TableCell component="th" scope="row" align='center'>
              {users.id}
            </TableCell>
            <TableCell align='center'>{users.email}</TableCell>
            <TableCell align='center'>{users.full_name}</TableCell>
            <TableCell align='center'>{users.roles}</TableCell>
            <TableCell align='center'>{users.creation_date}</TableCell>
            {
              users.status === 1 ? <TableCell align='center'>Activo</TableCell> 
              : <TableCell align='center'>Inactivo</TableCell>
            }
          </TableRow>
          
        </React.Fragment>
      );
}