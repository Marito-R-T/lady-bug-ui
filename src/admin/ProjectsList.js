import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GeneralRow from '../general/GeneralRow';
import EnhancedTableHead from '../general/EnhancedTableHead';
import EnhancedTableToolbar from '../general/EnhancedTableToolbar';
import {stableSort, getComparator} from '../general/Sorting'


function createData(id, name, admin, status, start_date, due_date, cases_amount) {
  return {
    id,
    name,
    admin,
    status,
    start_date,
    due_date,
    cases_amount }
}

//Display purposes only, it will change
const rows = [
  createData(1,'Frozen yoghurt','PM','active', '12-29-15', '11-29-22', 4),
  createData(2,'Ice cream sandwich','PM', 'active', '10-29-15', '12-29-22', 3),
  createData(3,'Eclair','PM', 'active', '12-29-15', '09-29-22', 6),
  createData(4,'Cupcake','PM', 'active', '12-29-15', '05-29-22', 10),
  createData(5,'Gingerbread', 'PM', 'active', '12-29-15', '12-29-22', 8),
  createData(6,'Something else', 'PM', 'closed', '12-29-15', '12-29-22', 5)
];

const headCell = [
  {
    id: 'collapsible',
    label: ''
  },
  {
    id: 'id',
    label: 'Project ID'
  },
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'manager',
    label: 'Manager'
  },
  {
    id: 'status',
    label: 'Status'
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
    id: 'cases_amount',
    label: 'Cases Amount'
  }
];
        
export default function ProjectsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
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

  // Used to avoid a layout jump on table when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <Paper sx={{ marginTop: '10%',
                  marginLeft: '12%',
                  display: 'flex',
                  width: '75%',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
      >
        <EnhancedTableToolbar title={'Projects List'} data={rows} />        
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
                stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return <GeneralRow project={row} />
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    
    );
}
