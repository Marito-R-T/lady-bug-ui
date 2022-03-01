import * as React from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Typography from '@mui/material/Typography';

export default function DateTimeRangePicker() {
    const [value, setValue] = React.useState([null, null]);
  const [valuei, setValuei] = React.useState(null);
  const [valuef, setValuef] = React.useState(null);
  console.log(valuei);
  console.log(valuef);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        label="Advanced keyboard"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <Box sx={{ mx: 1 }}> 
            <Typography variant="caption">start date:</Typography>
             </Box>
            <MobileDateTimePicker
              value={valuei}
              onChange={(newValue) => {
                setValuei(newValue);
              }}
              renderInput={(params) => (
                <input
                  ref={params.inputRef}
                  {...params.inputProps}
                  placeholder="mm/dd/yyy hh:mm"
                  style={{ border: 'none', width: 140, backgroundColor: '#8ab5b5' }}
                />
              )}
            />
            <Box sx={{ mx: 1 }}>
                <Typography variant="caption"> due date: </Typography>
            </Box>
            <MobileDateTimePicker
              value={valuef}
              onChange={(newValue) => {
                if (newValue > valuei) {
                  setValuef(newValue);
                }
              }}
              renderInput={(params) => (
                <input
                  ref={params.inputRef}
                  {...params.inputProps}
                  placeholder="mm/dd/yyy hh:mm"
                  style={{ border: 'none', width: 140, backgroundColor: '#8ab5b5' }}
                />
              )}
            />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}