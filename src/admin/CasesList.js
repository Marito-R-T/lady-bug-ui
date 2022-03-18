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

function createData(id, description, case_type, status, project, start_date, due_date) {
  return {
    id,
    description,
    case_type,
    status,
    project,
    start_date,
    due_date }
}

//Display purposes only, it will change
const rows = [
    createData(1, 'Case 1', 'Tipo 1', 'active', 'Project 1', '11-29-15', '11-29-22'),
    createData(2, 'Case 2', 'Tipo 3', 'active', 'Project 2', '11-29-13', '10-29-22'),
    createData(3, 'Case 3', 'Tipo 5', 'active', 'Project 3', '11-29-19', '09-29-22'),
    createData(4, 'Case 4', 'Tipo 2', 'active', 'Project 4', '11-29-18', '08-29-22'),
    createData(5, 'Case 5', 'Tipo 3', 'active', 'Project 1', '11-29-17', '07-29-22'),
    createData(6, 'Case 6', 'Tipo 4', 'active', 'Project 1', '11-29-16', '06-29-22'),
];

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
  }
];
        
export default function CasesList() {
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
        <EnhancedTableToolbar title={'Cases List'} data={rows} />        
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
                    return <CaseRow cases={row} />
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
