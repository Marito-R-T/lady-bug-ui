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
import CaseRow from '../general/CaseRow';
import axios from 'axios';
import Cookies from 'js-cookie';

const headCell = [
  {
    id: 'collapsible',
    label: ''
  },
  {
    id: 'id',
    label: 'Case ID'
  },
  {
    id: 'description',
    label: 'Description'
  },
  {
    id: 'case_type',
    label: 'Case Type'
  },
  {
    id: 'status',
    label: 'Status'
  },
  {
    id: 'project',
    label: 'Project Name'
  },
  {
    id: 'start_date',
    label: 'Start Date'
  },
  {
    id: 'due_date',
    label: 'Due Date'
  },
  {
    id: 'cancel',
    label: 'Cancel'
  }
];
        
export default function CasesList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [cases, setCases] = React.useState([]);
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

  const getCases = async (page, size) => {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
      try {
          const response = await axios.get(`https://ladybugger.herokuapp.com/admin/get-cases?page=${page}&size=${size}`,
              {
                  headers: {
                      'Authorization': auth
                  }
              }
          );
          return response.data;
        } catch(error) {
          console.error(error);
      }
  }

  React.useEffect(() => {
    getCases(page, rowsPerPage).then((cases) => setCases(cases));
  },[page, rowsPerPage]);

  // Used to avoid a layout jump on table when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cases.length) : 0;

    return (
      <Paper sx={{ marginTop: '10%',
                  marginLeft: '12%',
                  display: 'flex',
                  width: '75%',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
      >
        <EnhancedTableToolbar header={'Cases List'} data={cases} />        
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
                stableSort(cases, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return <CaseRow id={row.id} cases={row} key={row.id} />
                  })
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
          count={cases.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    
    );
}
