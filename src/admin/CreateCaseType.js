import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const columns = [
    { id: 'number', label: '#', maxWidth: 100, minWidth: 100 },
    { id: 'Name', label: 'Name', maxWidth: 500, minWidth: 450 },
    {
        id: 'delete',
        label: '',
        maxWidth: 150
        , minWidth: 150,

        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];


function CreateCaseType() {
    useEffect(() => {

    }, []);
    const [rows, setRows] = useState([
        { id: 1, name: "First Phase" },
    ]);
    const [isAdd, setAdd] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);
    const valueRef = useRef('')
    const handleConfirm = () => {
        setShowConfirm(true);

    };


    const handleAdd = () => {
        console.log(isAdd);
        setAdd(true);
        // setRows([
        //     ...rows,
        //     {
        //         id: rows.length + 1, name: ""
        //     },
        // ]);
        console.log(isAdd);
    };
    const handleNo = () => {
        setShowConfirm(false);
    };
    const setAddNo = () => {
        setShowAdd(false);
        console.log(showAdd)
    };

    const handleRemoveClick = (i) => {
        console.log(i)
        console.log(rows)
        const list = [...rows];
        console.log(list)
        list.splice(i, 1);
        console.log(list)
        setRows(list);
        setShowConfirm(false);
    };
    const confirmAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, name: valueRef.current.value
            },
        ]);
        setAdd(false)
    };







    return (

        <div>


            <Box
                component="form"
                sx={{
                    marginTop: 10,
                    '& .MuiTextField-root': { m: 1, width: '65%' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>New Case Type  </h1>
                <div className="container">
                    <TextField
                        style={{ width: '20%' }}
                        size="small"
                        required
                        id="standard-required"
                        label="Case Type Name"

                        variant="standard"
                    />
                    <br></br>

                    <Grid sx={{
                        marginTop: 5,
                        marginBottom: 5
                    }} item xs={20} sm={18}>
                        <TextField
                            fullWidth
                            required
                            id="standard-multiline-static"
                            label="Case Type Discription"
                            multiline

                            rows={4}

                        />
                    </Grid>
                    <h3>Phases  </h3>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        marginLeft='18%'
                        justifyContent="center"
                        width='6%'

                    >
                        <Button  onClick={handleAdd} 
                            >
                            <AddBoxIcon onClick={handleAdd} />
                            ADD
                        </Button>
                    </Grid>

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        width='100%'

                    >

                        <Paper sx={{ align: 'center', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow >
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align="center"
                                                    style={{ maxWidth: column.maxWidth, minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {rows.map((row, i) => {
                                            return (

                                                <TableRow key={row.id+"_"+i} >



                                                    <TableCell key={row.id} align="center" component="th" scope="row" sx={{ maxWidth: 100, minWidth: 100 }}>
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell key={row.id + "_2"} align="center" sx={{ maxWidth: 500, minWidth: 400 }} >
                                                        {row.name}
                                                    </TableCell>


                                                    <TableCell
                                                        key={row.id + "_3"}
                                                        align="right"
                                                    >
                                                        <Button className="mr10" onClick={handleConfirm}>
                                                            <DeleteOutlineIcon />
                                                        </Button>
                                                    </TableCell>
                                                    {showConfirm && (

                                                        <Dialog
                                                            open={showConfirm}
                                                            onClose={handleNo}
                                                            aria-labelledby="alert-dialog-title"
                                                            aria-describedby="alert-dialog-description"
                                                        >
                                                            <DialogTitle id="alert-dialog-title">
                                                                {"Confirm Delete"}
                                                            </DialogTitle>
                                                            <DialogContent>
                                                                <DialogContentText id="alert-dialog-description">
                                                                    Are you sure to delete
                                                                </DialogContentText>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button
                                                                    onClick={() => handleRemoveClick(i)}
                                                                    color="primary"
                                                                    autoFocus
                                                                >
                                                                    Yes
                                                                </Button>
                                                                <Button
                                                                    onClick={handleNo}
                                                                    color="primary"
                                                                    autoFocus
                                                                >
                                                                    No
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>

                                                    )}
                                                    {isAdd && (

                                                        <Dialog
                                                            open={isAdd}
                                                            onClose={setAddNo}
                                                            aria-labelledby="alert-dialog-title"
                                                            aria-describedby="alert-dialog-description"
                                                        >
                                                            <DialogTitle id="alert-dialog-title">
                                                                {"Enter Phase Name"}
                                                            </DialogTitle>
                                                            <DialogContent>
                                                                <DialogContentText id="alert-dialog-description">
                                                                    <TextField
                                                                        inputRef={valueRef}
                                                                        size="small"
                                                                        required
                                                                        id="standard-required"
                                                                        label="Name"

                                                                        variant="standard"
                                                                    />
                                                                </DialogContentText>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button
                                                                    onClick={() => confirmAdd()}
                                                                    color="primary"
                                                                    autoFocus
                                                                >
                                                                    Confirm
                                                                </Button>

                                                            </DialogActions>
                                                        </Dialog>

                                                    )}



                                                </TableRow>

                                            );
                                        })}

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    </Grid>
                    <br></br>
                    <Button
                        type="submit"

                        variant="contained"
                        sx={{ marginRight: '36px', mt: 3, mb: 2 }}
                        color="secondary"
                    >Cancel</Button>
                    <Button
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="dark"
                    >
                        <Typography
                            component={'span'}
                            color="white"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >Create</Typography>
                    </Button>
                </div>
            </Box >

            {/* {items.map(item => (
                <h1 key={item.id}>{item.name}</h1>
            ))} */}
        </div >

    );
}

export default CreateCaseType