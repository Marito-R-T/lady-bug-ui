import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Cookies from 'js-cookie';
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
import axios from 'axios';


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
    const [rows, setRows] = useState([
        { id: 1, name: "First Phase" },
    ]);
    const [isAdd, setAdd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const valueRef = useRef('');

    const postNewCaseType = async (name, description, phases) => {
        const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
        try {
            const response = await axios.post('https://ladybugger.herokuapp.com/admin/create-casetype', 
              {
                name: name, 
                description: description,
                phases: phases
              },
              {
                headers: {
                    'Authorization': auth
                }
              }
            );
            console.log('Success:', response.data)
            // navigate("/profile/"+response.data.id, { replace: true });
          } catch(error) {
            console.error(error);
          }   
    }

    const handleConfirm = () => {
        setShowConfirm(true);

    };

    const handleAdd = () => {
        setAdd(true);
    };
    
    const handleNo = () => {
        setShowConfirm(false);
    };
    
    const setAddNo = () => {
        setShowAdd(false);
    };

    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        postNewCaseType(data.get('name'), data.get('description'), rows.map((row) => row.name));
    }





    return (

        <div>


            <Box
                component="form"
                onSubmit={handleSubmit}
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
                        id='name'
                        name='name'
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
                            id="description"
                            name='description'
                            label="Case Type Description"
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
                                                                <TextField
                                                                    inputRef={valueRef}
                                                                    size="small"
                                                                    required
                                                                    id="standard-required"
                                                                    label="Name"

                                                                    variant="standard"
                                                                />
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
                        type="button"
                        onClick={() => console.log('click')}
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