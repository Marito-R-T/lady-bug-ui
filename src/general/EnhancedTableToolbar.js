import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterDialog from './FilterDialog';

export default function EnhancedTableToolbar(props) {

    return (
        <Toolbar
          sx={{
            pl: { s: 1 },
            pr: { xs: 1, sm: 1 },
            marginBottom: '0.5rem',
            marginTop: '0.5rem'
          }}
        >    
        <Typography
          sx={{ flex: '1 1 100%', marginRight: '65rem' }}
          variant="h5"
          id="tableTitle"
        >
          {props.header}
        </Typography>             
        {/* <Tooltip title="Filter list">
          <FilterDialog />
        </Tooltip> */}
        </Toolbar>
      );
}
    