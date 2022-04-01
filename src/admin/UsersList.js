import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EnhancedTableHead from '../general/EnhancedTableHead';
import EnhancedTableToolbar from '../general/EnhancedTableToolbar';
import {stableSort, getComparator} from '../general/Sorting'
import axios from 'axios';
import Cookies from 'js-cookie';
import UserRow from '../general/UserRow';

const headCell = [
  {
    id: 'id',
    label: 'ID'
  },
  {
    id: 'email',
    label: 'Email'
  },
  {
    id: 'full_name',
    label: 'Full Name'
  },
  {
    id: 'rol',
    label: 'Role'
  },
  {
    id: 'creation_date',
    label: 'Creation Date'
  },
  {
    id: 'status',
    label: 'Status'
  }
];
        
export default function UsersList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [users, setUsers] = React.useState([]);
  const density = 68;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    //function jalar los datos que le correspondan 
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getUsers = async (page, size) => {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
      try {
          const response = await axios.get(`https://ladybugger.herokuapp.com/admin/get-users?page=${page}&size=${size}`,
              {
                  headers: {
                      'Authorization': auth
                  }
              }
          );
          console.log(response.data);
          return response.data;
        } catch(error) {
          console.error(error);
      }
  }

  React.useEffect(() => {
    getUsers(page, rowsPerPage).then((value) => setUsers(value));
    console.log(users);
  },[page, rowsPerPage]);

  // Used to avoid a layout jump on table when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

    return (
        <Paper sx={{ marginTop: '10%',
                    marginLeft: '12%',
                    display: 'flex',
                    width: '75%',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}
        >
            <EnhancedTableToolbar header={'Users List'} />        
            <TableContainer>
                <Table aria-label="collapsible table" >
                <EnhancedTableHead 
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    headCells={headCell} 
                />
                <TableBody>
                {
                    users.length !== 0 ?
                    stableSort(users, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return <UserRow key={row.id} users={row} />
                    }) : <p>loading data...</p>
                }
                { emptyRows > 0 && (
                    <TableRow 
                        style={{
                        height: density * emptyRows,
                        }}
                    >
                        <TableCell colSpan={8} />
                    </TableRow>
                    )
                }
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length + 1}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        
        );
}
