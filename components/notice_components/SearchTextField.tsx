import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mr: 3, width: '100%', minWidth: '130px'}, 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search Keyword" variant="outlined" />
      </Box>
    );
  }