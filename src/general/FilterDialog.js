import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FilterSelector from './FilterSelector';
import TextField from '@mui/material/TextField';

const DialogHeader = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
};
  
DialogHeader.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function FilterDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <FilterListIcon />
            </IconButton>
            <Dialog
                onClose={handleClose}
                aria-labelledby="dialog-title"
                open={open}
            >
                <DialogHeader id="dialog-title" onClose={handleClose}>
                Filters
                </DialogHeader>
                <DialogContent dividers>
                    <Stack direction="row" spacing={13}>
                        <Typography> Column </Typography>
                        <Typography> Operator </Typography>
                        <Typography> Value </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} marginTop={'2%'} >
                        <FilterSelector></FilterSelector>
                        <FilterSelector></FilterSelector>
                        <TextField id="standard-basic" variant="standard" />
                    </Stack>
                </DialogContent>
                <Button autoFocus onClick={handleClose}>
                    FILTER
                </Button>
                <DialogActions>
                
                </DialogActions>
            </Dialog>
        </div>
    );
}