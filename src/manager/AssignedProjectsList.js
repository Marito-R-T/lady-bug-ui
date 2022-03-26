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
import {stableSort, getComparator} from '../general/Sorting';
import ProjectRow from '../general/ProjectRow';

function createData(id, admin, name, due_date) {
  return {
    id,
    admin,
    name,
    due_date
    }
}

//Display purposes only, it will change
const rows = [
  createData(1,'Sergio Cifuentes','Frozen yoghurt','11-29-22'),
  createData(2,'Sergio Cifuentes','Project 2','10-29-22'),
  createData(3,'Sergio Cifuentes','Project 3','09-29-22'),
  createData(4,'Sergio Cifuentes','Project 4','08-29-22'),
  createData(5,'Sergio Cifuentes','Project 5','07-29-22'),
  createData(6,'Sergio Cifuentes','Project 6','05-29-22'),
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
    id: 'manager',
    label: 'Project Manager'
  },
  {
    id: 'name',
    label: 'Project Name'
  },
  {
    id: 'due_date',
    label: 'Due Date'
  }
];
        
export default function AssignedProjectsList() {
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
        <EnhancedTableToolbar title={'Assigned Projects List'} data={rows} />        
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
                    return <ProjectRow project={row} />
                  })
              }
              { emptyRows > 0 && (
                  <TableRow 
                    style={{
                      height: density * emptyRows,
                    }}
                  >
                    <TableCell colSpan={5} />
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