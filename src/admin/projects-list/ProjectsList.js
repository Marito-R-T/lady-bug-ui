import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  }
}));

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

function ProjectsListRow(props) {
    const { project } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {project.id}
            </TableCell>
            <TableCell align='center'>{project.name}</TableCell>
            <TableCell align='center'>{project.admin}</TableCell>
            <TableCell align='center'>{project.status}</TableCell>
            <TableCell align='center'>{project.start_date}</TableCell>
            <TableCell align='center'>{project.due_date}</TableCell>
            <TableCell align='center'>{project.cases_amount}</TableCell>
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
    
ProjectsListRow.propTypes = {
    row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    admin: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    cases_amount: PropTypes.number.isRequired,
    }).isRequired,
};

//Display purposes only, it will change
const rows = [
  createData(1,'Frozen yoghurt','PM','active', '12-29-15', '12-29-22', 4),
  createData(2,'Ice cream sandwich','PM', 'active', '12-29-15', '12-29-22', 3),
  createData(3,'Eclair','PM', 'active', '12-29-15', '12-29-22', 6),
  createData(4,'Cupcake','PM', 'active', '12-29-15', '12-29-22', 10),
  createData(5,'Gingerbread', 'PM', 'active', '12-29-15', '12-29-22', 8),
  createData(6,'Something else', 'PM', 'closed', '12-29-15', '12-29-22', 5)
];
        
export default function ProjectsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const density = 68;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Used to avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <Paper sx={{ marginTop: '15%',
                  marginLeft: '12%',
                  display: 'flex',
                  width: '75%',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
      >
        <TableContainer>
            <Table aria-label="collapsible table" >
            <TableHead>
                <TableRow>
                <StyledTableCell />
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align='center'>Name</StyledTableCell>
                <StyledTableCell align='center'>Manager</StyledTableCell>
                <StyledTableCell align='center'>Status</StyledTableCell>
                <StyledTableCell align='center'>Start Date</StyledTableCell>
                <StyledTableCell align='center'>Due Date</StyledTableCell>
                <StyledTableCell align='center'>Cases amount</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <ProjectsListRow project={row} />
              ))
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
